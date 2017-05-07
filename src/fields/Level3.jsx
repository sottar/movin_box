/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level3: FieldInfo = {
  matrix: [8, 10], // [Horizontal, Vertical]
  blockPosition: [
    [1,1,1,1,1,1,1,1],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [1,1,1,1,1,1,1,1],
  ],
  boxInfo: [
    {
      id: 1,
      position: [2, 1],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [3, 1],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 3,
      position: [4, 1],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 4,
      position: [5, 1],
      color: BoxColors.pink,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [2, 8],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 2,
      position: [3, 8],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 3,
      position: [4, 8],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 4,
      position: [5, 8],
      color: BoxColors.pink,
      cleared: false,
    },
  ],
};
