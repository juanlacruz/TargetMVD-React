import * as types from './actionTypes';
import { browserHistory } from 'react-router';
import * as userApi from '../api/userApi';

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

export function editProfileSuccess(user) {
  return {
    type: types.SIGNUP_SUCCESS,
    user: user,
  };
}

export function editProfileFailure() {
  return {
    type: types.SIGNUP_FAILURE,
    error: 'There was an error editing your profile, please try again',
  };
}

export function signup(signupData) {
  return (dispatch) => {
    dispatch(signupRequest(true));

    return userApi.signup(signupData)
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

export function editProfile(editData) {
  return (dispatch) => {
    return userApi.editProfile(editData)
      .then((response) => {
        dispatch(editProfileSuccess(response));
        browserHistory.push('/home');
      })
      .catch((error) => {
        console.log(error);
        dispatch(editProfileFailure());
      });
  };
}
