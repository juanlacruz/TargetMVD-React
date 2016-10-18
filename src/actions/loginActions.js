import * as types from './actionTypes';
import axios from 'axios';
import Config from 'Config';
import { browserHistory } from 'react-router';
import api from '../api/apiService.js';

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
  };
}

export function login(loginData) {
  return (dispatch) => {
    dispatch(loginRequest(true));

    return api
      .post(Config.serverUrl + 'users/sign_in', { user: loginData })
      .then((response) => {
        dispatch(loginSuccess(response));
        browserHistory.push('/home');
      })
      .catch((error) => {
        dispatch(loginFailure());
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
