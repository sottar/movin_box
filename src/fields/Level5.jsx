/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level5: FieldInfo = {
  matrix: [7, 8], // [Horizontal, Vertical]
  blockPosition: [
    [0,0,0,0,0,0,0],
    [1,1,1,1,1,0,0],
    [0,0,0,0,0,0,1],
    [0,0,0,0,0,0,1],
    [0,0,0,0,0,1,1],
    [1,0,0,0,0,0,0],
    [1,0,0,0,0,0,0],
    [1,0,0,1,0,0,0],
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
  ],
  goalInfo: [
    {
      id: 1,
      position: [0, 4],
      color: BoxColors.blue,
      cleared: false,
    },
    {
      id: 2,
      position: [2, 7],
      color: BoxColors.blue,
      cleared: false,
    },
  ],
};
