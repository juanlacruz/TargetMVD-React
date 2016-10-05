import * as types from '../actions/actionTypes';
import * as constants from '../constants';

const initialState = {
  user: null,
  loginData: {
    email: '',
    password: '',
  },
  isLoading: false,
  loginError: '',
  isLoadingLogout: false,
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP:
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      }
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
      }
    }
    case types.LOGOUT_SUCCESS:
      localStorage.removeItem(constants.AUTH_TOKEN_KEY);
      return {
        ...state,
        user: null,
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        isLoadingLogout: action.value,
      }
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        logoutError: action.error,
      }
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
