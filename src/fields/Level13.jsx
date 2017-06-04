/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level13: FieldInfo = {
  matrix: [6, 6], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0],
    [0,1,0,1,0,0],
    [0,0,0,0,0,0],
    [0,1,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,1,0],
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
      position: [3, 0],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 3,
      position: [0, 3],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 4,
      position: [3, 3],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 5,
      position: [5, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 6,
      position: [2, 5],
      color: BoxColors.pink,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [4, 0],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 2,
      position: [5, 0],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 3,
      position: [5, 1],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 4,
      position: [0, 4],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 5,
      position: [0, 5],
      color: BoxColors.pink,
      cleared: false,
    },
    {
      id: 6,
      position: [1, 5],
      color: BoxColors.green,
      cleared: false,
    },
  ],
};
