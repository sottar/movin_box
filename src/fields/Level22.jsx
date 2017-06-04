/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level22: FieldInfo = {
  matrix: [8, 9], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
  ],
  boxInfo: [
    {
      id: 1,
      position: [0, 0],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 2,
      position: [1, 0],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 3,
      position: [2, 0],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 4,
      position: [3, 0],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 5,
      position: [0, 8],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 6,
      position: [1, 8],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 7,
      position: [2, 8],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 8,
      position: [3, 8],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [0, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [1, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 3,
      position: [2, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 4,
      position: [3, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 5,
      position: [0, 5],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 6,
      position: [1, 5],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 7,
      position: [2, 5],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 8,
      position: [3, 5],
      color: BoxColors.blue,
      cleared: false,
    },
  ],
};
