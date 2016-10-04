import * as types from './actionTypes';
import axios from 'axios';
import Config from 'Config';
import { browserHistory } from 'react-router';

export function login(user) {
  return {
    type: types.LOGIN,
    user: user,
  };
}

export function loadingLogin(value) {
  return {
    type: types.LOGIN_LOADING,
    isLoading: value,
  };
}

export function loginRequest(loginData) {
  return (dispatch, getState) => {
    let state = getState();
    dispatch(loadingLogin(true));

    return axios
        .post(Config.serverUrl + 'users/sign_in', {user: loginData})
        .then(response => {
          dispatch(loadingLogin(false));

          if (response.status === 200) {
            return response.data
          }

          throw 'request failed';
        })
        .then(userData => {
          dispatch(login(userData));
          browserHistory.push('/home');
        })
        .catch(error => {
          dispatch(resetLoginForm())
          console.log(error);
        });
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

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
