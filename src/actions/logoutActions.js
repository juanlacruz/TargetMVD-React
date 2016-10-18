import * as types from './actionTypes';
import axios from 'axios';
import Config from 'Config';
import { browserHistory } from 'react-router';
import api from '../api/apiService.js';

export function logout() {
  return (dispatch) => {
    dispatch(logoutRequest(true));

    return api
      .delete(Config.serverUrl + 'users/sign_out')
      .then(() => {
        dispatch(logoutRequest(false));
        dispatch(logoutSuccess());
        browserHistory.push('/');
      })
      .catch((error) => {
        dispatch(logoutRequest(false));
        dispatch(logoutFailure());
        console.log(error);
      });
  };
}

export function logoutRequest(value) {
  return {
    type: types.LOGOUT_REQUEST,
    isLoading: value,
  };
}

export function logoutFailure() {
  return {
    type: types.LOGOUT_FAILURE,
    error: 'There was an error logging out, please try again',
  };
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
  };
}
