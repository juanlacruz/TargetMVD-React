import * as types from '../actions/actionTypes';

const initialState = {
  markers: []
};

export default function mapReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_MARKER: {
      const marker = action.value;
      let newMarkersArray = state.markers.slice();
      newMarkersArray.unshift(marker);
      return {
        markers: newMarkersArray,
      };
    }
    default:
      return state;
  }
}
