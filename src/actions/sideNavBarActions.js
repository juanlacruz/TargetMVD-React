import * as types from './actionTypes';

export function toggleShow(value) {
  return {
    type: types.TOGGLE_SHOW_ITEM,
    value
  };
}
