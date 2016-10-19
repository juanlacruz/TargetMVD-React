import * as types from './actionTypes';
import axios from 'axios';
import { browserHistory } from 'react-router';
import * as loginApi from '../api/loginApi';
import * as constants from '../constants';

export function logout() {
  return (dispatch) => {
    dispatch(logoutRequest(true));

    return loginApi.logout()
      .then(() => {
        axios.defaults.headers.common[constants.AUTH_TOKEN_KEY] = null;
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
