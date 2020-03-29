import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

const Index = () => (
  <Layout title="Home">
    <h2 className="title is-2">Lets play Bingo</h2>
    <img src="/static/nextjs.jpg" />
    <p>
      A proof of concept app, to play Bingo online.
    </p>
  </Layout>
);

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(Index);
