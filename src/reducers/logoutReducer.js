import * as types from '../actions/actionTypes';
import * as constants from '../constants';

const initialState = {
  isLoading: false,
  logoutError: null,
};

export default function logoutReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: action.value,
        logoutError: null,
      };
    case types.LOGOUT_SUCCESS:
      localStorage.removeItem(constants.AUTH_TOKEN_KEY);
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        logoutError: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
}
