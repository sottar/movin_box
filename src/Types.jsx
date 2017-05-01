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
  availablePositions: Array<Array<number>>; // 1 is enable to moving
  boxInfo: Array<BoxInfo>;
  goalInfo: Array<GoalInfo>;
}