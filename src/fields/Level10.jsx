/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level10: FieldInfo = {
  matrix: [8, 8], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
  ],
  boxInfo: [
    {
      id: 1,
      position: [0, 0],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [1, 0],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 3,
      position: [2, 0],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 4,
      position: [3, 0],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [3, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [4, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 3,
      position: [3, 4],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 4,
      position: [4, 4],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
};
