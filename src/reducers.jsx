/* @flow */
import { combineReducers } from 'redux';

function initReducer(state = { }) {
  return state;
}

const rootReducer = combineReducers({initReducer});

export default rootReducer;
