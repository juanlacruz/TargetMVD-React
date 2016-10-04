import * as types from '../actions/actionTypes';

const initialState = {
  signupData: {
    email:'',
    password:'',
    password_confirmation:'',
    username:'',
  },
  isLoading: false,
};

export default function signupReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOADING_SIGNUP:
      return {
        ...state,
        isLoading: action.value
      }
    case types.SIGNUP_FORM_UPDATE: {
      let data = Object.assign({}, state.signupData);
      data[action.field] = action.value;

      return {
        ...state,
        signupData: data,
      };
    }
    case types.SIGNUP_FORM_RESET:
      return {
        ...state,
        signupData: {},
      };
    default:
      return state;
  }
}
