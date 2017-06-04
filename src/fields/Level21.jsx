/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level21: FieldInfo = {
  matrix: [8, 9], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,1,0],
    [1,0,0,0,0,0,1,1],
    [0,0,0,1,1,0,0,0],
    [0,0,0,0,1,0,0,0],
    [0,1,1,0,0,0,0,0],
    [0,1,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
  ],
  boxInfo: [
    {
      id: 1,
      position: [6, 0],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 2,
      position: [7, 0],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 3,
      position: [7, 1],
      color: BoxColors.pink,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [3, 5],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 2,
      position: [2, 6],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 3,
      position: [2, 7],
      color: BoxColors.pink,
      cleared: false,
    },
  ],
};
