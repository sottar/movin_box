/* @flow */

export type BoxInfo = {
  cleared: boolean; // true is matched goal's position and color
  color: string;
  id: number;
  position: Array<number>; // [Horizontal, Vertical]. [0, 0] is upper left position
};

export type GoalInfo = {
  cleared: boolean; // true is matched box's position and color
  color: string;
  id: number;
  position: Array<number>; // [Horizontal, Vertical]. [0, 0] is upper left position
};

export type FieldInfo = {
  blockPosition: Array<Array<number>>; // 1 is block position, 0 is enable to moving
  boxInfo: Array<BoxInfo>;
  goalInfo: Array<GoalInfo>;
  matrix: Array<number>; // [Horizontal, Vertical]
}


export type NewGameValue = {
  availableZone: Array<Array<number>>,
  boxInfo: Array<BoxInfo>,
  fieldInfo: FieldInfo,
  oldBoxInfo: Array<BoxInfo>,
}

export type MoveBoxValue = {
  availableZone: Array<Array<number>>,
  boxInfo: Array<BoxInfo>,
  oldBoxInfo: Array<BoxInfo>,
}

export type UndoValue = {
  boxInfo: Array<BoxInfo>,
}

export type ResetValue = {
  availableZone: Array<Array<number>>,
  boxInfo: Array<BoxInfo>,
  fieldInfo: FieldInfo,
}

export type TouchStartValue = {
  touchStart: Array<number>,
}

export type Action = { type: string; payload: Object };
