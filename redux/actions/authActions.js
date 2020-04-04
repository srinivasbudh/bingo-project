import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE, DEAUTHENTICATE } from '../types';
import { API } from '../../config';
import { setCookie, removeCookie } from '../../utils/cookie';

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ username, password }, type) => {
  return (dispatch) => {
    axios.post(`${API}/${type}`, { username, password })
      .then((response) => {
        setCookie('token', response.data.sessionId);
        if(response.data.loginSuccess){
          Router.push('/bingo');
          dispatch({type: AUTHENTICATE, payload: response.data.sessionId, loginMessage: "Success"});
        }else{
          dispatch({type: DEAUTHENTICATE, loginMessage: "Failure"});
          throw new Error();
        }
      })
      .catch((err) => {
        alert('Please enter Valid Credentials');
      });
  };
};

// gets token from the api and stores it in the redux store and in cookie
const register = ({ username, password }, type) => {
  return (dispatch) => {
    axios.post(`${API}/${type}`, { username, password })
      .then((response) => {
        if(response.data.successful){
         dispatch({type:DEAUTHENTICATE, registerMessage: "Success"});
          Router.push('/signin');
          alert('Registration successful please login now')
        }else{
          throw new Error();
        }
      })
      .catch((err) => {
        alert('User already Exists please enter another username, we dont have reset password option for now');
      });
  };
};

const createToken = ({ username }) => {
  return (dispatch) => {
    axios.get(`${API}/bingo-rest/bingo/create/guest`,{
                  params: {
                    username: username
                    }
                  })
      .then((response) => {
        if(response.data){
          dispatch({type:DEAUTHENTICATE, registerMessage: username});
          Router.push('/bingoGuest');
        }else{
          dispatch({type: DEAUTHENTICATE});
        }
      })
      .catch((err) => {
        alert('Something went wrong Please try again later');
      });
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({type: AUTHENTICATE, payload: token});
  };
};

// removing the token
const deauthenticate = () => {
  return (dispatch) => {
    removeCookie('token');
    Router.push('/');
    dispatch({type: DEAUTHENTICATE});
  };
};


export default {
  authenticate,
  reauthenticate,
  deauthenticate,
  createToken,
  register
};
