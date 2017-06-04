/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level19: FieldInfo = {
  matrix: [7, 7], // [Horizontal, Vertical]
  blockPosition: [
    [1,1,1,0,1,1,1],
    [1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1],
    [0,0,0,1,0,0,0],
    [1,0,0,0,0,0,1],
    [1,0,0,0,0,0,1],
    [1,1,1,0,1,1,1],
  ],
  boxInfo: [
    {
      id: 1,
      position: [2, 1],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 2,
      position: [4, 1],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 3,
      position: [1, 2],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 4,
      position: [5, 2],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 5,
      position: [1, 4],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 6,
      position: [5, 4],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 7,
      position: [2, 5],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 8,
      position: [4, 5],
      color: BoxColors.pink,
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
      position: [3, 2],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 3,
      position: [4, 2],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 4,
      position: [2, 3],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 5,
      position: [4, 3],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 6,
      position: [2, 4],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 7,
      position: [3, 4],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 8,
      position: [4, 4],
      color: BoxColors.green,
      cleared: false,
    },
  ],
};
