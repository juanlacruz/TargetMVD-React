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

    return axios
        .post(Config.serverUrl + 'users', { user: signupData })
        .then(response => {
          dispatch(signupRequest(false));

          if (response.status === 200) {
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
          dispatch(signupFailure());
        });
  };
}
