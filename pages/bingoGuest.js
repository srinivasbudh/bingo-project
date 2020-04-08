import { connect } from 'react-redux';
import actions from '../redux/actions';
import Layout from '../components/Layout';
import axios from 'axios';
import { API } from '../config';
import initialize from '../utils/initialize';
import getResult from '../redux/actions/authActions';

function newCard(id,bingoArray) {
  //Starting loop through each square card
  for(var i=0; i < 25; i++) { //<--always this code for loops. change in red
    if(i==12){
    }else{
      setSquare(i,bingoArray[i]);
    }

  }
  document.getElementById(id).disabled=true;
  document.getElementById(id).innerHTML="Click On  below Letters to verify line Results";
  document.getElementById(id).className = 'jsx-3138590050 button button4';
}

function setSquare(thisSquare,usedNums) {
  var currSquare = 'square'+thisSquare;
  document.getElementById(currSquare).innerHTML = usedNums;
}

function runPop(value,className){
  var valueLatest= document.getElementById(value).innerHTML;
  if(!valueLatest.includes('.')) {
    document.getElementById(value).innerHTML = valueLatest+'.';
    document.getElementById(value).className=className.slice(0,className.length-1)+'3';
  }else{
    document.getElementById(value).innerHTML = valueLatest.slice(0,valueLatest.length-1);
    document.getElementById(value).className=className.slice(0,className.length-1)+'2';
  }

}
function videoOperation(buttonName,url) {
  if(buttonName=="Hide"){
        document.getElementById("videoFrame").style.visibility = "hidden";
        document.getElementById("iframe").src=""
         document.getElementById("iframe").width="0"
        document.getElementById("iframe").height="0"
        document.getElementById("youtubeBtn").innerHTML="Watch Live in Youtube"
  }else{
    document.getElementById("videoFrame").style.visibility = "visible";
      document.getElementById("iframe").src= url
       document.getElementById("iframe").width="360"
        document.getElementById("iframe").height="320"
        document.getElementById("youtubeBtn").innerHTML="Hide"
  }

}

const verifyResult = async (buttonName) => {
     const responseToken = await axios.get(`${API}/bingo-rest/bingo/getYouTubeLink`);
     if(responseToken.data=="Sorry we dont have any live streaming now"){
          alert(responseToken.data + "Please comeback later");
     }else{
      videoOperation(buttonName,responseToken.data)
     }

    };

    const youtubeVide = async (bingoArray, username,resultType) => {
         const responseToken = await axios.get(`${API}/bingo-rest/bingo/getWinners`,{
                          params: {
                            resultType:resultType,
                            username: username
                            }
                          });
                          alert(responseToken.data.message);
        };

const BingoGuest = ({bingoArray,username}) => (
<Layout title="Home">
      <main>
            <button id="youtubeBtn" type="button" onClick={() =>verifyResult(document.getElementById("youtubeBtn").innerHTML)}>Watch Live in Youtube</button>
             <div id="videoFrame" background ="#1abc9c"><iframe id="iframe" className="iframe" background ="#1abc9c" width="0" height="0" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <style jsx>{`
                button{
                  background-color: #9b59b6;
                  border: none;
                  color: white;
                  text-align: top;
                  text-decoration: none;
                  display: inline-block;
                  font-size: 16px;
                  margin: 6px 4px;
                  cursor: pointer;
                  border: 3px solid black;
                  border-radius: 15%;
                }
              `}</style>
      </main>
           <main>
             <div id="content">
               <button id="generateFreeBtn" onClick={() => newCard('generateFreeBtn',bingoArray)}>Get your Bingo Coupon</button>
               <table id="bingotable">
               <tbody>
                 <tr>
                   <td><button className="button button2" style={{background: '#9b59b6'}} onClick={() =>verifyResult(bingoArray,username,"column-B")}>B</button></td>
                   <td><button className="button button2" style={{background: '#9b59b6'}} onClick={() =>verifyResult(bingoArray,username,"column-I")}>I</button></td>
                   <td><button className="button button2" style={{background: '#9b59b6'}} onClick={() =>verifyResult(bingoArray,username,"column-N")}>N</button></td>
                   <td><button className="button button2" style={{background: '#9b59b6'}} onClick={() =>verifyResult(bingoArray,username,"column-G")}>G</button></td>
                   <td><button className="button button2" style={{background: '#9b59b6'}} onClick={() =>verifyResult(bingoArray,username,"column-O")}>O</button></td>
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
               <button id="FullHouseButton" onClick={() =>verifyResult(bingoArray,username,"FullHouse")}>Bingo Full House</button>
             </div>

                           <style jsx>{`
                                  main {
                                                  background: #1abc9c;
                                                  display: flex;
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
                                                  text-decoration: line-through;
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
                                                  .main, .button3, .button2, .main, .right, .iframe{
                                                    width: 100%;
                                                    padding: 0;
                                                  }
                                                  .right {
                                                    width: 100%;
                                                  }
                                                }
                                                @media only screen and (max-width:500px) {
                                                  /* For mobile phones: */
                                                  .menu, .main, .right, .iframe{
                                                    width: 100%;
                                                  }
                                                  .button3,.button2{
                                                    width:100%;
                                                  }
                                                }
                                  `}</style>

                   </main>
              </Layout>
)



BingoGuest.getInitialProps = async ctx => {
  initialize(ctx);
  const username = ctx.store.getState().authentication.registerMessage;
  if (username) {
    const responseToken = await axios.get(`${API}/bingo-rest/bingo/get/username`,{
                 params: {
                   username: username
                   }
                 });
       const bingoArray =responseToken.data[0];
       return {bingoArray,username};
   }
};


export default connect(
  state => state
)(BingoGuest);
