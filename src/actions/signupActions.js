import * as types from './actionTypes';

export function signup(user) {
  return {
    type: types.SIGNUP,
    user: user,
  };
}

export function updateSignupForm(field, value) {
  return {
    type: types.SIGNUP_FORM_UPDATE,
    field: field,
    value: value,
  };
}

export function resetSignupForm() {
  return {
    type: types.SIGNUP_FORM_RESET,
  };
}

