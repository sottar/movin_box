/* @flow */

export type BoxInfo = {
  id: number;
  position: Array<number>;
  color: string;
  cleared: boolean;
};

export type GoalInfo = {
  id: number;
  position: Array<number>;
  color: string;
  cleared: boolean;
};

export type FieldInfo = {
  matrix: Array<number>;
  availablePositions: Array<Array<number>>;
  boxInfo: Array<BoxInfo>;
  goalInfo: Array<GoalInfo>;
}