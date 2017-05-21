/* @flow */

export const NEW_GAME = 'NEW_GAME';
export const MOVE_BOX = 'MOVE_BOX';
export const UNDO = 'UNDO';
export const RESET = 'RESET';
export const TOUCH_START = 'TOUCH_START';

export function newGame(value) {
  return {
    type: NEW_GAME,
    value,
  };
}

export function moveBox(value) {
  return {
    type: MOVE_BOX,
    value,
  };
}

export function undo(value) {
  return {
    type: UNDO,
    value,
  };
}

export function reset(value) {
  return {
    type: RESET,
    value,
  };
}

export function touchStart(value) {
  return {
    type: TOUCH_START,
    value,
  };
}