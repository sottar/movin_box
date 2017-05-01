/* @flow */
import type {FieldInfo} from '../Types';

export const Level1: FieldInfo = {
  matrix: [5, 8],
  availablePositions: [
    [1,0,1,0,0,0,0,0,1,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,0,1,1],
  ],
  boxInfo: [
    {
      id: 1,
      position: [3, 3],
      color: 'red',
      cleared: false,
    },
    {
      id: 2,
      position: [3, 4],
      color: 'red',
      cleared: false,
    },
    {
      id: 3,
      position: [3, 5],
      color: 'red',
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [6, 3],
      color: 'red',
      cleared: false,
    },
    {
      id: 2,
      position: [6, 4],
      color: 'red',
      cleared: false,
    },
    {
      id: 3,
      position: [6, 5],
      color: 'red',
      cleared: false,
    },
  ],
};
