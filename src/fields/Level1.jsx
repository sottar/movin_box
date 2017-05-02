/* @flow */
import type {FieldInfo} from '../Types';

export const Level1: FieldInfo = {
  matrix: [8, 8], // [Horizontal, Vertical]
  availablePositions: [
    [1,1,1,1,1,1,1,1],
    [1,1,0,0,0,0,0,1],
    [0,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,0],
    [1,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1],
  ],
  boxInfo: [
    {
      id: 1,
      position: [1, 2],
      color: '#f9a825',
      cleared: false,
    },
    {
      id: 2,
      position: [1, 3],
      color: '#f9a825',
      cleared: false,
    },
    {
      id: 3,
      position: [1, 4],
      color: '#f9a825',
      cleared: false,
    },
    {
      id: 3,
      position: [1, 5],
      color: '#f9a825',
      cleared: false,
    },
  ],
  goalInfo: [
    {
      id: 1,
      position: [6, 3],
      color: '#f9a825',
      cleared: false,
    },
    {
      id: 2,
      position: [6, 4],
      color: '#f9a825',
      cleared: false,
    },
    {
      id: 3,
      position: [6, 5],
      color: '#f9a825',
      cleared: false,
    },
  ],
};
