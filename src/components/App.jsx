/* @flow */
import React from 'react';

export default class App extends React.Component {
  state: {
    clearedLevels: Array<number>;
    openedLevels: Array<number>;
  }
  constructor(props: any) {
    super(props);
    this.state = {
      clearedLevels: [],
      openedLevels: [1],
    };
    this.addClearedLevel = this.addClearedLevel.bind(this);
    this.addOpenedLevel = this.addOpenedLevel.bind(this);
  }
  addClearedLevel(addLevel: number) {
    let clearedLevels = this.state.clearedLevels;
    clearedLevels.push(addLevel);
    this.setState({
      clearedLevels: clearedLevels,
    });
  }
  addOpenedLevel(addLevel: number) {
    let openedLevels = this.state.openedLevels;
    openedLevels.push(addLevel);
    this.setState({
      openedLevels: openedLevels,
    });
  }
  render() {
    return (
      <div>
          {this.props.children && React.cloneElement(this.props.children, {
            clearedLevels: this.state.clearedLevels,
            openedLevels: this.state.openedLevels,
            addClearedLevel: this.addClearedLevel,
            addOpenedLevel: this.addOpenedLevel,
          })}
      </div>
    );
  }
}
