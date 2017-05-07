/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level6: FieldInfo = {
  matrix: [8, 9], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,1,0,0,0],
    [0,1,1,1,1,0,0,0],
    [0,0,0,1,0,0,0,0],
    [0,1,0,0,0,1,0,0],
    [1,1,0,1,1,1,1,0],
    [0,0,0,0,0,0,0,0],
    [0,1,0,1,1,0,1,0],
    [0,0,0,1,1,0,1,0],
    [0,0,0,0,0,0,0,0],
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
      position: [1, 0],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 3,
      position: [2, 0],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 4,
      position: [3, 0],
      color: BoxColors.pink,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [0, 1],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 2,
      position: [1, 2],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 3,
      position: [2, 3],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 4,
      position: [0, 6],
      color: BoxColors.pink,
      cleared: false,
    },
  ],
};
