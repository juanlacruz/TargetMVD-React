import * as types from './actionTypes';
import axios from 'axios';
import Config from 'Config';
import { browserHistory } from 'react-router';

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
  return (dispatch) => {
    dispatch(loginRequest(true));

    return axios
        .post(Config.serverUrl + 'users/sign_in', {user: loginData})
        .then(response => {
          dispatch(loginRequest(false));

          if (response.status === 200) {
            return response.data
          }

          dispatch(loginFailure());
          throw 'request failed';
        })
        .then(userData => {
          dispatch(loginSuccess(userData));
          browserHistory.push('/home');
        })
        .catch(error => {
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
