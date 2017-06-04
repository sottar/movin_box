/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level20: FieldInfo = {
  matrix: [7, 7], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0],
    [0,0,1,0,1,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
  ],
  boxInfo: [
    {
      id: 1,
      position: [1, 6],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [2, 6],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 3,
      position: [3, 6],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 4,
      position: [4, 6],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 5,
      position: [5, 6],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [3, 2],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [2, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 3,
      position: [3, 3],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 4,
      position: [4, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 5,
      position: [3, 4],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
};
