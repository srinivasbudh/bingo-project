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
          dispatch({type: AUTHENTICATE, payload: response.data.sessionId});
        }else{
          dispatch({type: DEAUTHENTICATE});
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
};

// gets token from the api and stores it in the redux store and in cookie
const register = ({ username, password }, type) => {
  return (dispatch) => {
    axios.post(`${API}/${type}`, { username, password })
      .then((response) => {
        if(response.data.successful){
          Router.push('/signin');
        }else{
          dispatch({type: DEAUTHENTICATE});
        }
      })
      .catch((err) => {
        throw new Error(err);
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
  register
};
