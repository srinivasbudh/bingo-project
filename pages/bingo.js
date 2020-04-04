import { connect } from 'react-redux';
import actions from '../redux/actions';
import Layout from '../components/Layout';
import axios from 'axios';
import { API } from '../config';
import initialize from '../utils/initialize';

function newCard(id,bingoArray) {
  //Starting loop through each square card
  for(var i=0; i < 25; i++) { //<--always this code for loops. change in red
    if(i==12){
    }else{
      setSquare(i,bingoArray[i]);
    }

  }
  document.getElementById(id).disabled=true;
  document.getElementById(id).className = 'jsx-3138590050 button button4';
}

function setSquare(thisSquare,usedNums) {
  var currSquare = 'square'+thisSquare;
  document.getElementById(currSquare).innerHTML = usedNums;
}

function runPop(value,className){
  var valueLatest= document.getElementById(value).innerHTML;
  if(!valueLatest.includes('✔')) {
    document.getElementById(value).innerHTML = valueLatest+'✔';
    document.getElementById(value).className=className.slice(0,className.length-1)+'3';
  }else{
    document.getElementById(value).innerHTML = valueLatest.slice(0,valueLatest.length-1);
    document.getElementById(value).className=className.slice(0,className.length-1)+'2';
  }

}


const Bingo = ({bingoArray}) => (
  <Layout title="Home">
    <main>
      <div id="content">
        <button id="generateFreeBtn" onClick={() => newCard('generateFreeBtn',bingoArray)}>Get your Bingo Coupon</button>
        <table id="bingotable">
        <tbody>
          <tr>
            <th className="orange">B</th>
            <th className="orange">I</th>
            <th className="orange">N</th>
            <th className="orange">G</th>
            <th className="orange">O</th>
          </tr>
          <tr>
            <td> <button id="square0" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square0',document.getElementById('square0').className)}></button></td>
            <td> <button id="square5" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square5',document.getElementById('square5').className)}></button></td>
            <td> <button id="square10" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square10',document.getElementById('square10').className)}></button></td>
            <td> <button id="square15" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square15',document.getElementById('square15').className)}></button></td>
            <td> <button id="square20" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square20',document.getElementById('square20').className)}></button></td>
          </tr>
          <tr>
            <td> <button id="square1" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square1',document.getElementById('square1').className)}></button></td>
            <td> <button id="square6" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square6',document.getElementById('square6').className)}></button></td>
            <td> <button id="square11" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square11',document.getElementById('square11').className)}></button></td>
            <td> <button id="square16" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square16',document.getElementById('square16').className)}></button></td>
            <td> <button id="square21" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square21',document.getElementById('square21').className)}></button></td>
          </tr>
          <tr>
            <td> <button id="square2" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square2',document.getElementById('square2').className)}></button></td>
            <td> <button id="square7" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square7',document.getElementById('square7').className)}></button></td>
            <td id="squarefree"> FREE</td>
            <td> <button id="square17" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square17',document.getElementById('square17').className)}></button></td>
            <td> <button id="square22" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square22',document.getElementById('square22').className)}></button></td>
          </tr>
          <tr>
            <td> <button id="square3" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square3',document.getElementById('square3').className)}></button></td>
            <td> <button id="square8" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square8',document.getElementById('square8').className)}></button></td>
            <td> <button id="square13" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square13',document.getElementById('square13').className)}></button></td>
            <td> <button id="square18" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square18',document.getElementById('square18').className)}></button></td>
            <td> <button id="square23" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square23',document.getElementById('square23').className)}></button></td>
          </tr>
          <tr>
            <td> <button id="square4" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square4',document.getElementById('square4').className)}></button></td>
            <td> <button id="square9" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square9',document.getElementById('square9').className)}></button></td>
            <td> <button id="square14" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square14',document.getElementById('square14').className)}></button></td>
            <td> <button id="square19" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square19',document.getElementById('square19').className)}></button></td>
            <td> <button id="square24" type="submit" className="button button2" value="&nbsp;" onClick={() => runPop('square24',document.getElementById('square24').className)}></button></td>
          </tr>
         </tbody>
        </table>
      </div>

      <style jsx>{`
             main {
                             background: #1abc9c;
                             display: flex;
                             height: 100vh;
                             align-content: center;
                             justify-content: center;
                             align-items: center;
                           }

                           h1, p {
                             font-family: 'Roboto', sans-serif; font-size: 20pt;
                             font-weight: 600;
                             margin: 0 auto;
                             text-align: center;
                             padding: 30px;
                             color: white;
                           }

                           p a {
                             text-decoration: none;
                             color: #f1c40f;
                           }

                           #squarefree {
                             font-family: Helvetica;
                             margin: 0 auto;
                             background: #5dc4de;
                             text-align: center;
                             font-weight: 600;
                             font-size: 1.5em;
                           }

                           td{
                             font-family: Helvetica;
                             margin: 0 auto;
                             text-align: center;
                             border: 3px solid black;
                             width: 20%;
                           }
                           input {
                               font-family: Helvetica;
                               margin: 0 auto;
                               text-align: center;
                               border: 3px solid black;
                               width: 100%;
                               height: 100%;
                           }
                           th {
                                font-family: Helvetica;
                                margin: 0 auto;
                                text-align: center;
                                border: 3px solid black;
                                width: 20%;
                                color: #f1c40f;
                                 background: #9b59b6;
                              }

                           .orange {
                             background: #9b59b6;
                           }
                           button{
                             background-color: #FF7E00;
                             border: none;
                             color: white;
                             padding: 15px 32px;
                             text-align: top;
                             text-decoration: none;
                             display: inline-block;
                             font-size: 18px;
                             margin: 6px 4px;
                             cursor: pointer;
                             border: 3px solid black;
                             border-radius: 15%;
                           }
                           .button4 {
                             background-color: #FF7E00;
                             border: none;
                             color: white;
                             padding: 15px 32px;
                             text-align: top;
                             text-decoration: none;
                             display: inline-block;
                             font-size: 18px;
                             margin: 6px 4px;
                             cursor: pointer;
                             border: 3px solid black;
                             border-radius: 15%;
                           }
                           .button2{
                             background-color: #fffdd0;
                             border: none;
                             color: black;
                             margin: 0 auto;
                             padding: 1.5em;
                             text-align: center;
                             text-decoration: none;
                             font-style: italic;
                             font-weight: bold;
                             font-size: 1.5em;
                             cursor: pointer;
                             border-radius: 15%;
                             border: 3px solid black;
                             width: 100%;
                             height: 100%
                             display: -webkit-flex;
                               display: -ms-flexbox;
                               display: flex;
                               -webkit-flex-direction: column;
                               -ms-flex-direction: column;
                               flex-direction: column;
                           }
                           .button3{
                             background-color: #90EE90;
                             border: none;
                             color: black;
                             margin: 0 auto;
                             padding: 1.5em;
                             text-align: center;
                             text-decoration: none;
                             display: inline-block;
                             font-size: 1.5em;
                             font-style: italic;
                             font-weight: bold;
                             cursor: pointer;
                             border-radius: 15%;
                             border: 3px solid black;
                             width: 100%;
                             height: 100%
                             display: -webkit-flex;
                                               display: -ms-flexbox;
                                               display: flex;
                                               -webkit-flex-direction: column;
                                               -ms-flex-direction: column;
                                               flex-direction: column;
                           }
                           @media only screen and (max-width:800px) {
                             /* For tablets: */
                             .main, .button3, .button2, .main, .right{
                               width: 100%;
                               padding: 0;
                             }
                             .right {
                               width: 100%;
                             }
                           }
                           @media only screen and (max-width:500px) {
                             /* For mobile phones: */
                             .menu, .main, .right{
                               width: 100%;
                             }
                             .button3,.button2{
                               width:100%;
                             }
                           }
             `}</style>

    </main>
  </Layout>
);

Bingo.getInitialProps = async ctx => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;
  if (token) {
    const response = await axios.get(`${API}/bingo-rest/bingo/count`,{
             params: {
               sessionId: token
               }
             });
    const count = response.data;
     console.log(count)
      if(count==0){
        const responseToken = await axios.get(`${API}/bingo-rest/bingo/create`,{
                     params: {
                       sessionId: token,
                       }
                     });
           const bingoArray =responseToken.data;
            return {bingoArray};
           }else{
        const responseToken = await axios.get(`${API}/bingo-rest/bingo/get`,{
                       params: {
                         sessionId: token
                         }
                       });
             const bingoArray =responseToken.data[0];
             return {bingoArray};
          }
          }
};


export default connect(
  state => state
)(Bingo);
