import * as types from './actionTypes';
import axios from 'axios';
import Config from 'Config';
import { browserHistory } from 'react-router';
import * as constants from '../constants'

export function updateLoginForm(field, value) {
  return {
    type: types.LOGIN_FORM_UPDATE,
    field: field,
    value: value,
  };
}

export function resetLoginForm() {
  return {
    type: types.LOGIN_FORM_RESET,
  };
}

export function loginRequest(value) {
  return {
    type: types.LOGIN_REQUEST,
    isLoading: value,
  };
}

export function loginFailure() {
  return {
    type: types.LOGIN_FAILURE,
    error: 'Login failed, please try again'
  }
}

export function login(loginData) {
  return (dispatch, getState) => {
    let state = getState();
    dispatch(loginRequest(true));

    return axios
        .post(Config.serverUrl + 'users/sign_in', {user: loginData})
        .then(response => {
          dispatch(loginRequest(false));

          if (response.status === 200) {
            return response.data
          }

          dispatch(loginError());
          throw 'request failed';
        })
        .then(userData => {
          dispatch(loginSuccess(userData));
          browserHistory.push('/home');
        })
        .catch(error => {
          dispatch(resetLoginForm())
          console.log(error);
        });
  };
}

export function loginSuccess(user) {
  return {
    type: types.LOGIN_SUCCESS,
    user: user,
  };
}
