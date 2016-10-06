import * as types from '../actions/actionTypes';
import * as constants from '../constants';

const initialState = {
  user: null,
  loginData: {
    email: '',
    password: '',
  },
  isLoading: false,
  loginError: null,
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        loginError: null,
      }
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS: {
      localStorage.setItem(constants.AUTH_TOKEN_KEY, action.user.token);
      return {
        ...state,
        user: action.user,
        isLoading: false,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        loginError: action.error,
        isLoading: false,
        loginData: initialState.loginData,
      }
    }
    default:
      return state;
  }
}
