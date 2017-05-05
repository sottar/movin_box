/* @flow */
import React from 'react';
import Header from './Header';
import LevelList from './LevelList';

export default class List extends React.Component {
  render() {
    const levelPerPages: number = 32;
    return (
      <div>
        <Header />
        <LevelList
          levelPerPages={levelPerPages}
          clearedLevels={this.props.clearedLevels}
          openedLevels={this.props.openedLevels}
        />
      </div>
    );
  }
}
