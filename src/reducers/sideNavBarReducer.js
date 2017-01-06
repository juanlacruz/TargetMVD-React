import * as types from '../actions/actionTypes';
import * as constants from '../constants';

const initialState = {
  showItem: constants.HOME
};

export default function sideNavBarReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOGGLE_SHOW_ITEM:
      return {
        showItem: action.value,
      };
    default:
      return state;
  }
}
