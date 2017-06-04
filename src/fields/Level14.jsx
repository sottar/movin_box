/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level14: FieldInfo = {
  matrix: [8, 9], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0],
    [0,0,0,0,0,1,0,1],
    [0,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
  ],
  boxInfo: [
    {
      id: 1,
      position: [4, 0],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 2,
      position: [7, 4],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 3,
      position: [3, 7],
      color: BoxColors.blue,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [7, 3],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 2,
      position: [3, 4],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 3,
      position: [3, 5],
      color: BoxColors.green,
      cleared: false,
    },
  ],
};
