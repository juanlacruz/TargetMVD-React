import * as types from '../actions/actionTypes';
import * as constants from '../constants';

const initialState = {
  user: null,
  loginData: {
    email: '',
    password: '',
  },
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP:
    case types.LOGIN: {
      localStorage.setItem(constants.AUTH_TOKEN_KEY, action.user.token);
      return {
        ...state,
        user: action.user,
      };
    }
    case types.LOGOUT:
      localStorage.removeItem(constants.AUTH_TOKEN_KEY);
      return {
        ...state,
        user: null,
      };
    case types.LOGIN_FORM_UPDATE: {
      let data = Object.assign({}, state.loginData);
      data[action.field] = action.value;

      return {
        ...state,
        loginData: data,
      };
    }
    case types.LOGIN_FORM_RESET:
      return {
        ...state,
        loginData: initialState.loginData,
      };
    default:
      return state;
  }
}
