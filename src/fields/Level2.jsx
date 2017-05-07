/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level2: FieldInfo = {
  matrix: [8, 8], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [0,0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0],
  ],
  boxInfo: [
    {
      id: 1,
      position: [1, 2],
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
      position: [1, 4],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 4,
      position: [1, 5],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [6, 2],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [6, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 3,
      position: [6, 4],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 4,
      position: [6, 5],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
};
