import * as types from '../actions/actionTypes';

const initialState = {
  signupData: {
    email:'',
    password:'',
    password_confirmation:'',
    username:'',
  },
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
      }
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        signupData: initialState.signupData,
        isLoading: false,
        signupError: action.error,
      };
    case types.SIGNUP_FORM_UPDATE: {
      let data = Object.assign({}, state.signupData);
      data[action.field] = action.value;

      return {
        ...state,
        signupData: data,
      };
    }
    default:
      return state;
  }
}
