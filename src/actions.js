/* @flow */
import type { NewGameValue, MoveBoxValue, UndoValue, ResetValue, TouchStartValue } from './Types';

export const NEW_GAME = 'NEW_GAME';
export const MOVE_BOX = 'MOVE_BOX';
export const UNDO = 'UNDO';
export const RESET = 'RESET';
export const TOUCH_START = 'TOUCH_START';

export const Actions = { NEW_GAME, MOVE_BOX, UNDO, RESET, TOUCH_START };

export function newGame(value: NewGameValue) {
  return {
    type: NEW_GAME,
    value,
  };
}

export function moveBox(value: MoveBoxValue) {
  return {
    type: MOVE_BOX,
    value,
  };
}

export function undo(value: UndoValue) {
  return {
    type: UNDO,
    value,
  };
}

export function reset(value: ResetValue) {
  return {
    type: RESET,
    value,
  };
}

export function touchStart(value: TouchStartValue) {
  return {
    type: TOUCH_START,
    value,
  };
}