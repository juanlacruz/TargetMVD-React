import * as types from './actionTypes';
import axios from 'axios';
import { browserHistory } from 'react-router';
import * as loginApi from '../api/loginApi';
import * as constants from '../constants';

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

    return loginApi.login(loginData)
      .then((response) => {
        dispatch(loginSuccess(response));
        axios.defaults.headers.common[constants.AUTH_TOKEN_KEY] = response.token;
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
