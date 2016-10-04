import * as types from './actionTypes';
import axios from 'axios';
import Config from 'Config';
import { browserHistory } from 'react-router';

export function signup(user) {
  return {
    type: types.SIGNUP,
    user: user,
  };
}

export function loadingSignup(value) {
  return {
    type: types.SIGNUP_LOADING,
    isLoading: value,
  };
}

export function signupRequest(signupData) {
  return (dispatch, getState) => {
    let state = getState();
    dispatch(loadingSignup(true));

    return axios
        .post(Config.serverUrl + 'users', {user: signupData})
        .then(response => {
          dispatch(loadingSignup(false));

          if(response.status === 200) {
            return response.data;
          }

          throw 'request failed';
        })
        .then(userData => {
          dispatch(signup(userData));
          browserHistory.push('/home');
        })
        .catch(error => {
          console.log(error);
          dispatch(resetSignupForm())
        });
  };
}

export function updateSignupForm(field, value) {
  return {
    type: types.SIGNUP_FORM_UPDATE,
    field: field,
    value: value,
  };
}

export function resetSignupForm() {
  return {
    type: types.SIGNUP_FORM_RESET,
  };
}

