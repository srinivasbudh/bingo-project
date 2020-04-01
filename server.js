const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const port = parseInt(process.env.PORT, 10) || 1111;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    server.use(cors());
    server.enable('trust proxy');
    server.use(cookieParser());

    server.get('/bingo-rest/user/login', (req, res ) => {
      if(req.cookies.token) {
        res.redirect('/bingo');
      } else {
        return app.render(req, res, '/bingo-rest/user/login', req.query);
      }
    });

    server.get('/bingo-rest/user/register', (req, res) => {
        req.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "X-Requested-With");

      if(req.cookies.token) {
        res.redirect('/signin');
      } else {
        return app.render(req, res, '/bingo-rest/user/register', req.query);
      }
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
