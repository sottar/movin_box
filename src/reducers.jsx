/* @flow */
import { combineReducers } from 'redux';
import { NEW_GAME, MOVE_BOX, UNDO } from './actions';
import { routerReducer } from 'react-router-redux';

function initReducer(state = {
  gameReducer: {
    fieldInfo: {
      matrix: [],
      blockPosition: [],
      boxInfo: [],
      goalInfo: [],
    },
    boxInfo: [],
    oldBoxInfo: [],
    availableZone: [],
    touchStart: [], // [horizontal axis, vertical axis]
  },
}) {
  return state;
}


function gameReducer(state = {
  fieldInfo: {
    matrix: [],
    blockPosition: [],
    boxInfo: [],
    goalInfo: [],
  },
  boxInfo: [],
  oldBoxInfo: [],
  availableZone: [],
  touchStart: [], // [horizontal axis, vertical axis]
}, action) {
  switch (action.type) {
  case NEW_GAME:
    return Object.assign({}, state, {
      fieldInfo: action.value.fieldInfo,
      boxInfo: action.value.fieldInfo.boxInfo,
      oldBoxInfo: action.value.fieldInfo.boxInfo,
      availableZone: action.value.newAvailableZone,
    });
  case MOVE_BOX:
    return Object.assign({}, state, {
      boxInfo: action.newBoxInfo,
      oldBoxInfo: action.boxInfo,
      availableZone: action.newavailableZone,
    });
  case UNDO:
    return Object.assign({}, state, {
      boxInfo: action.oldBoxInfo,
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  gameReducer,
  routing: routerReducer,
  // one: (state = {}) => state,
  // two: (state = {}) => state
});
export default rootReducer;
