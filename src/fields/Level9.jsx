/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level9: FieldInfo = {
  matrix: [7, 7], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,1,0,0],
    [0,1,0,0,0,0,0],
    [0,1,0,1,1,0,1],
    [0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0],
    [0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0],
  ],
  boxInfo: [
    {
      id: 1,
      position: [0, 6],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 2,
      position: [5, 6],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 3,
      position: [6, 6],
      color: BoxColors.blue,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [1, 6],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [2, 6],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 3,
      position: [4, 6],
      color: BoxColors.green,
      cleared: false,
    },
  ],
};
