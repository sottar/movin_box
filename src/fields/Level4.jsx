/* @flow */
import type {FieldInfo} from '../Types';
import { BoxColors } from '../BoxColors';

export const Level4: FieldInfo = {
  matrix: [8, 12], // [Horizontal, Vertical]
  blockPosition: [
    [1,1,1,0,0,1,1,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,1,1,0,0,1,1,1],
  ],
  boxInfo: [
    {
      id: 1,
      position: [1, 3],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [1, 4],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [6, 7],
      color: BoxColors.amber,
      cleared: false,
    },
    {
      id: 2,
      position: [6, 8],
      color: BoxColors.amber,
      cleared: false,
    },
  ],
};
