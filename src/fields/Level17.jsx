/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level17: FieldInfo = {
  matrix: [8, 8], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,0],
    [0,0,1,0,0,1,0,0],
    [0,0,1,0,0,1,0,0],
    [0,0,1,0,0,1,0,0],
    [0,0,0,0,0,0,0,0],
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
      position: [7, 0],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 3,
      position: [7, 0],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 4,
      position: [7, 7],
      color: BoxColors.blue,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [4, 4],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 2,
      position: [5, 4],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 3,
      position: [4, 5],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 4,
      position: [5, 5],
      color: BoxColors.blue,
      cleared: false,
    },
  ],
};
