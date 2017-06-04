/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level24: FieldInfo = {
  matrix: [8, 8], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,1,1],
    [1,1,1,0,1,0,0,1],
    [0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,1],
    [1,1,0,0,0,0,1,1],
  ],
  boxInfo: [
    {
      id: 1,
      position: [0, 0],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 2,
      position: [0, 2],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [2, 0],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [2, 2],
      color: BoxColors.pink,
      cleared: false,
    },
  ],
};
