import * as types from './actionTypes';
import axios from 'axios';
import Config from 'Config';
import { browserHistory } from 'react-router';
import * as constants from '../constants';

export function logout() {
  return (dispatch) => {
    dispatch(logoutRequest(true));

    return axios
      .delete(Config.serverUrl + 'users/sign_out',
        {
          headers:
          {
            'X-USER-TOKEN' : localStorage.getItem(constants.AUTH_TOKEN_KEY),
            'Accept':'*/*',
            'Content-Type': '*/*',
          }
        }
      )
      .then(response => {
        dispatch(logoutRequest(false));

        if (response.status === 204) {
          dispatch(logoutSuccess());
          browserHistory.push('/');
        } else {
          throw 'request failed';
        }
      })
      .catch(error => {
        dispatch(logoutFailure());
        console.log(error);
      });
  }
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
  }
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
  };
}
