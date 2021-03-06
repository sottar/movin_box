/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level23: FieldInfo = {
  matrix: [7, 6], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0],
    [1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
  ],
  boxInfo: [
    {
      id: 1,
      position: [0, 5],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 2,
      position: [1, 5],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 3,
      position: [2, 5],
      color: BoxColors.blue,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [3, 1],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 2,
      position: [3, 2],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 3,
      position: [3, 3],
      color: BoxColors.blue,
      cleared: false,
    },
  ],
};
