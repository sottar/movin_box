/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level1: FieldInfo = {
  matrix: [5, 9], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [0,0,0,0,0],
  ],
  boxInfo: [
    {
      id: 1,
      position: [2, 2],
      color: BoxColors.blue,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [2, 6],
      color: BoxColors.blue,
      cleared: false,
    },
  ],
};
