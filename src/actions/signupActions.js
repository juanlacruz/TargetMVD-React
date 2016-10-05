import * as types from './actionTypes';
import axios from 'axios';
import Config from 'Config';
import { browserHistory } from 'react-router';

export function signupSuccess(user) {
  return {
    type: types.SIGNUP_SUCCESS,
    user: user,
  };
}

export function loadingSignup(value) {
  return {
    type: types.SIGNUP_REQUEST,
    isLoading: value,
  };
}

export function signup(signupData) {
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
          dispatch(signupSuccess(userData));
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

