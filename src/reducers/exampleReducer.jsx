import * as types from '../actions/actionTypes';

const initialState = {
  counter: 0,
};

export default function exampleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ACTION_EXAMPLE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
