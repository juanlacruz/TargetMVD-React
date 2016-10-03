import * as types from './actionTypes';

export function login(user) {
  return {
    type: types.LOGIN,
    user: user,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}

export function updateLoginForm(field, value) {
  return {
    type: types.LOGIN_FORM_UPDATE,
    field: field,
    value: value,
  };
}

export function resetLoginForm() {
  return {
    type: types.LOGIN_FORM_RESET,
  };
}
