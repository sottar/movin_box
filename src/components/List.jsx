/* @flow */
import React from 'react';
import Header from './Header';
import LevelList from './LevelList';

export default class List extends React.Component {
  render() {
    const levelPerPages: number = 32;
    const clearedLevels: Array<number> = [1,2,3,4,5];
    const openedLevels: Array<number> = [1,2,3,4,5,6,7,8,9];
    return (
      <div>
        <Header />
        <LevelList
          levelPerPages={levelPerPages}
          clearedLevels={clearedLevels}
          openedLevels={openedLevels}
        />
      </div>
    );
  }
}
