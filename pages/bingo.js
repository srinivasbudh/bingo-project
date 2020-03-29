import { connect } from 'react-redux';
import actions from '../redux/actions';
import Layout from '../components/Layout';

function newCard() {
  //Starting loop through each square card
  for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
    setSquare(i);
  }
}

function setSquare(thisSquare) {
  var currSquare = 'square'+thisSquare;
  var newNum=0;
  var usedNums = new Array(76);

  var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);

  do {
    newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
  }
  while (usedNums[newNum]);

  usedNums[newNum] = true;
  document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
  return Math.floor(Math.random() * 15);

}

function anotherCard() {
  var usedNums = new Array(76);
  for(var i=1; i<usedNums.length; i++) {
    usedNums[i] = false;
  }

  newCard();
}
const Bingo = () => (
  <Layout title="Home">
    <main>
      <div id="content">
        <button onClick={() => anotherCard()}>Generate Bingo Coupon</button>
        <table id="bingotable">
          <tr>
            <th className="orange">B</th>
            <th className="orange">I</th>
            <th className="orange">N</th>
            <th className="orange">G</th>
            <th className="orange">O</th>
          </tr>
          <tr>
            <td id="square0"> &nbsp;</td>
            <td id="square1"> &nbsp;</td>
            <td id="square2"> &nbsp;</td>
            <td id="square3"> &nbsp;</td>
            <td id="square4"> &nbsp;</td>
          </tr>
          <tr>
            <td id="square5"> &nbsp;</td>
            <td id="square6"> &nbsp;</td>
            <td id="square7"> &nbsp;</td>
            <td id="square8"> &nbsp;</td>
            <td id="square9"> &nbsp;</td>
          </tr>
          <tr>
            <td id="square10"> &nbsp;</td>
            <td id="square11"> &nbsp;</td>
            <td id="squarefree"> FREE</td>
            <td id="square12"> &nbsp;</td>
            <td id="square13"> &nbsp;</td>
          </tr>
          <tr>
            <td id="square14"> &nbsp;</td>
            <td id="square15"> &nbsp;</td>
            <td id="square16"> &nbsp;</td>
            <td id="square17"> &nbsp;</td>
            <td id="square18"> &nbsp;</td>
          </tr>
          <tr>
            <td id="square19"> &nbsp;</td>
            <td id="square20"> &nbsp;</td>
            <td id="square21"> &nbsp;</td>
            <td id="square22"> &nbsp;</td>
            <td id="square23"> &nbsp;</td>
          </tr>
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
                font-size: 15pt;
              }

              #bingotable {
                margin: 0 auto;
                text-align: center;
                width: 400px;
                height: 400px;
                border-collapse: collapse;
                background: white;
              }

              td {
                font-family: Helvetica;
                margin: 0 auto;
                text-align: center;
                border: 3px solid black;
                width: 20%;
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
              button {
                background-color: #FF7E00;
                border: none;
                color: white;
                padding: 15px 32px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 18px;
                margin: 6px 4px;
                cursor: pointer;
                border-radius: 15%;
              }
             `}</style>

    </main>
  </Layout>
);



export default connect(
  state => state,
  actions
)(Bingo);
