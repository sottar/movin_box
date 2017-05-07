/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level7: FieldInfo = {
  matrix: [6, 8], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,1,0,1,0,1],
    [0,0,0,0,0,0],
    [1,0,1,0,1,0],
    [0,0,0,0,0,0],
    [0,1,0,1,0,1],
  ],
  boxInfo: [
    {
      id: 1,
      position: [0, 7],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 2,
      position: [1, 6],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 3,
      position: [2, 7],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 4,
      position: [3, 6],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 5,
      position: [4, 7],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 6,
      position: [5, 6],
      color: BoxColors.green,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [0, 0],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 2,
      position: [1, 5],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 3,
      position: [3, 5],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 4,
      position: [4, 0],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 5,
      position: [5, 0],
      color: BoxColors.green,
      cleared: false,
    },
    {
      id: 6,
      position: [5, 1],
      color: BoxColors.green,
      cleared: false,
    },
  ],
};
