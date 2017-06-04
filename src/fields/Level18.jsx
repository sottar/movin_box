/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level18: FieldInfo = {
  matrix: [7, 7], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,1,0,0,0,1],
    [0,1,0,1,0,0,0],
    [0,0,0,0,0,0,0],
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
      position: [6, 1],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 3,
      position: [6, 2],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 4,
      position: [6, 3],
      color: BoxColors.pink,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [2, 5],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 2,
      position: [1, 6],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 3,
      position: [2, 6],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 4,
      position: [3, 6],
      color: BoxColors.pink,
      cleared: false,
    },
  ],
};
