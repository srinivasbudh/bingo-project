import { AUTHENTICATE, DEAUTHENTICATE } from '../types';

const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch(action.type) {
  case AUTHENTICATE:
    return { token: action.payload, loginMessage: action.loginMessage };
  case DEAUTHENTICATE:
    return { token: null , registerMessage: action.registerMessage};
  default:
    return state;
  }
};
