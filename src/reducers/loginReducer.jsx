import * as types from '../actions/actionTypes';

const initialState = {
  user: null,
  loginData: {
    username: '',
    password: '',
  },
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP:
    case types.LOGIN: {
      localStorage.setItem('auth_token', action.user.token);
      return {
        ...state,
        user: action.user,
      };
    }
    case types.LOGOUT:
      localStorage.removeItem('auth_token');
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
        loginData: {},
      };
    default:
      return state;
  }
}
