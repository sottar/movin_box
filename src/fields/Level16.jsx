/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level16: FieldInfo = {
  matrix: [7, 6], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,1,0,0],
    [1,0,0,0,0,0,1],
    [0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0],
    [1,0,0,0,0,0,1],
    [0,0,1,0,0,0,0],
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
      position: [0, 6],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 3,
      position: [0, 5],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 4,
      position: [6, 5],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [3, 3],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 2,
      position: [3, 4],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 3,
      position: [3, 5],
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
