/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level12: FieldInfo = {
  matrix: [8, 8], // [Horizontal, Vertical]
  blockPosition: [
    [1,1,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,1,1],
  ],
  boxInfo: [
    {
      id: 1,
      position: [0, 3],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 2,
      position: [5, 6],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 3,
      position: [7, 1],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [2, 2],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 2,
      position: [7, 2],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 3,
      position: [2, 3],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
};
