import * as types from './actionTypes';
import Config from 'Config';
import { browserHistory } from 'react-router';
import api from '../api/apiService.js';

export function signupSuccess(user) {
  return {
    type: types.SIGNUP_SUCCESS,
    user: user,
  };
}

export function signupFailure() {
  return {
    type: types.SIGNUP_FAILURE,
    error: 'There was an error signing up, please try again',
  };
}

export function signupRequest(value) {
  return {
    type: types.SIGNUP_REQUEST,
    isLoading: value,
  };
}

export function signup(signupData) {
  return (dispatch) => {
    dispatch(signupRequest(true));

    return api
      .post(Config.serverUrl + 'users', { user: signupData })
      .then((response) => {
        dispatch(signupSuccess(response));
        browserHistory.push('/home');
      })
      .catch((error) => {
        console.log(error);
        dispatch(signupFailure());
      });
  };
}
