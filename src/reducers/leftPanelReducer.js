import * as types from '../actions/actionTypes';

const initialState = {
  showEditProfile: true
};

export default function leftPanelReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOGGLE_EDIT_PROFILE:
      return {
        showEditProfile: !state.showEditProfile,
      };
    default:
      return state;
  }
}
