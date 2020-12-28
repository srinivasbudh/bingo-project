import { connect } from 'react-redux';
import actions from '../redux/actions';
import Layout from '../components/Layout';
import axios from 'axios';
import { API,BitBns,AnyCoin } from '../config';
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

function clearMessage(){
  document.getElementById("alertBox").innerHTML="";
}

const youtubeVideo = async (buttonName) => {
     const responseToken = await axios.get(`${API}/bingo-rest/bingo/getYouTubeLink`);
     if(responseToken.data=="Sorry we dont have any live streaming now"){
          alert(responseToken.data + "Please comeback later");
     }else{
      videoOperation(buttonName,responseToken.data)
     }

    };

const verifyResult = async (bingoArray, username,resultType) => {
     const responseToken = await axios.get(`${API}/bingo-rest/bingo/getWinners`,{
                      params: {
                        resultType:resultType,
                        username: username
                        }
                      });
      if(responseToken.data.message.includes("Congratulations")){
        document.getElementById("alertBox").className=document.getElementById("content").className+" alertDivStatus";
      }else{
        document.getElementById("alertBox").className=document.getElementById("content").className+" alertDiv";
      }
      document.getElementById("alertBox").innerHTML='<strong>Alert!</strong>'+responseToken.data.message;
    };

     const verifyNumberTaken = async (value,className) => {
          var valueLatest= document.getElementById(value).innerHTML;
          var newValue=0;

          if(valueLatest.includes('.')) {
            newValue= valueLatest.slice(0,valueLatest.length-1);
          }else{
            newValue=valueLatest;
          }

        const responseToken = await axios.get(`${API}/bingo-rest/bingo/verifyNumberIsTaken`,{
                                    params: {
                                      takenNumber:newValue
                                      }
                                    });

         if(!valueLatest.includes('.') & responseToken.data==true) {
           document.getElementById(value).innerHTML = valueLatest+'.';
           document.getElementById(value).className=className.slice(0,className.length-1)+'3';
           clearMessage();
         }else{
          if(responseToken.data==true){
              document.getElementById(value).innerHTML = valueLatest.slice(0,valueLatest.length-1);
              document.getElementById(value).className=className.slice(0,className.length-1)+'2';
              clearMessage();
          }else{
            if(newValue>0){
              document.getElementById("alertBox").className=document.getElementById("content").className+" alertDiv";
              document.getElementById("alertBox").innerHTML='<strong>Alert!</strong> Sorry '+newValue+' is not yet Taken in Bingo Draw';
            }
          }
         }
      };

const Bingo = ({HeadString,BTCString,ETHString,XRPString,BCHString,LTCString}) => (
<Layout title="Home">
           <main>
             <div id="content">
             <h2>{HeadString}</h2>
             <h2>{BTCString}</h2>
             <h2>{ETHString}</h2>
             <h2>{XRPString}</h2>
             <h2>{BCHString}</h2>
             <h2>{LTCString}</h2>
            </div>
            <style jsx>{`
              h2, p {
                font-family: 'Roboto', sans-serif; font-size: 20pt;
                font-weight: 600;
                margin: 0 auto;
                text-align: center;
                padding: 30px;
                color: black;
              }
            `}</style>

                   </main>
              </Layout>
)

Bingo.getInitialProps = async ctx => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;

    const response = await axios.get(`${BitBns}/order/getTickerWithVolume/`);
    const BTCResponse = await axios.get(`${AnyCoin}/buyprices?CoinCode=BTC&FiatCode=EUR&CoinAmount=1`);
    const ETHResponse = await axios.get(`${AnyCoin}/buyprices?CoinCode=ETH&FiatCode=EUR&CoinAmount=1`);
    const XRPResponse = await axios.get(`${AnyCoin}/buyprices?CoinCode=XRP&FiatCode=EUR&CoinAmount=1`);
    const BCHResponse = await axios.get(`${AnyCoin}/buyprices?CoinCode=BCH&FiatCode=EUR&CoinAmount=1`);
    const LTCResponse = await axios.get(`${AnyCoin}/buyprices?CoinCode=LTC&FiatCode=EUR&CoinAmount=1`);
    let data = response.data;
    let textString ='BTC'
    let BTCValue =data.BTC.highest_buy_bid/BTCResponse.data.Data[0].FiatAmount
    let ETHValue =data.ETH.highest_buy_bid/ETHResponse.data.Data[0].FiatAmount
    let XRPValue =data.XRP.highest_buy_bid/XRPResponse.data.Data[0].FiatAmount
    let BCHValue =data.BCH.highest_buy_bid/BCHResponse.data.Data[0].FiatAmount
    let LTCValue =data.LTC.highest_buy_bid/LTCResponse.data.Data[0].FiatAmount
            let HeadString ='Coin Name'+' ,   '+'INR Value'+' ,   '+'Euro Value'+' ,   '+'Conversion'+'\n'
            let BTCString = textString+' ,   '+data.BTC.highest_buy_bid+' ,   '+BTCResponse.data.Data[0].FiatAmount+' ,   '+BTCValue+'\n'
            let ETHString = 'ETH'+' ,   '+data.ETH.highest_buy_bid+' ,   '+ETHResponse.data.Data[0].FiatAmount+' ,   '+ETHValue+'\n'
            let XRPString = 'XRP'+' ,   '+data.XRP.highest_buy_bid+' ,   '+XRPResponse.data.Data[0].FiatAmount+' ,   '+XRPValue+'\n'
            let BCHString = 'BCH'+' ,   '+data.BCH.highest_buy_bid+' ,   '+BCHResponse.data.Data[0].FiatAmount+' ,   '+BCHValue+'\n'
            let LTCString = 'LTC'+' ,   '+data.LTC.highest_buy_bid+' ,   '+LTCResponse.data.Data[0].FiatAmount+' ,   '+LTCValue+'\n'

        return {HeadString,BTCString,ETHString,XRPString,BCHString,LTCString};
};


export default connect(
  state => state
)(Bingo);
