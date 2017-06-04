/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level11: FieldInfo = {
  matrix: [7, 7], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0],
    [0,1,1,1,0,0,0],
    [0,0,0,0,0,1,0],
    [0,1,0,1,0,1,1],
    [0,0,0,0,0,0,0],
  ],
  boxInfo: [
    {
      id: 1,
      position: [0, 0],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 2,
      position: [2, 0],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 3,
      position: [4, 0],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [5, 3],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 2,
      position: [3, 0],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 3,
      position: [1, 0],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
};
