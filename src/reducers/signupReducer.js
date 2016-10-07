import * as types from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  signupError: null,
};

export default function signupReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: action.value,
        signupError: null,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        signupData: initialState.signupData,
        isLoading: false,
        signupError: action.error,
      };
    default:
      return state;
  }
}
