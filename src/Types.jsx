/* @flow */

export type BoxInfo = {
  id: number;
  position: Array<number>; // [Horizontal, Vertical]. [0, 0] is upper left position
  color: string;
  cleared: boolean; // true is matched goal's position and color
};

export type GoalInfo = {
  id: number;
  position: Array<number>; // [Horizontal, Vertical]. [0, 0] is upper left position
  color: string;
  cleared: boolean; // true is matched box's position and color
};

export type FieldInfo = {
  matrix: Array<number>; // [Horizontal, Vertical]
  blockPosition: Array<Array<number>>; // 1 is block position, 0 is enable to moving
  boxInfo: Array<BoxInfo>;
  goalInfo: Array<GoalInfo>;
}


export type NewGameValue = {
  fieldInfo: FieldInfo,
  boxInfo: Array<BoxInfo>,
  oldBoxInfo: Array<BoxInfo>,
  availableZone: Array<Array<number>>,
}

export type MoveBoxValue = {
  boxInfo: Array<BoxInfo>,
  oldBoxInfo: Array<BoxInfo>,
  availableZone: Array<Array<number>>,
}

export type UndoValue = {
  boxInfo: Array<BoxInfo>,
}

export type ResetValue = {
  fieldInfo: FieldInfo,
  boxInfo: Array<BoxInfo>,
}

export type TouchStartValue = {
  touchStart: Array<number>,
}

export type Action = { type: string; payload: Object };
