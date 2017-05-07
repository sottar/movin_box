/* @flow */
import React from 'react';
import Storage from '../Storage';

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
    this.updateClearedLevels(clearedLevels.toString());
  }
  addOpenedLevel(addLevel: number) {
    let openedLevels = this.state.openedLevels;
    openedLevels.push(addLevel);
    this.setState({
      openedLevels: openedLevels,
    });
    this.updateOpenedLevels(openedLevels.toString());
  }
  updateClearedLevels(clearedLevels: string) {
    const storage = new Storage();
    storage.saveLocalStorage('clearedLevels', clearedLevels);
  }
  updateOpenedLevels(openedLevels: string) {
    const storage = new Storage();
    storage.saveLocalStorage('openedLevels', openedLevels);
  }
  componentWillMount() {
    const storage = new Storage();
    const clearedLevelsStr = storage.getLocalStorage('clearedLevels');
    const openedLevelsStr = storage.getLocalStorage('openedLevels');
    if (clearedLevelsStr == null || openedLevelsStr == null) {
      return;
    }
    // If have played in the past, set to state.
    let clearedLevelsArray = [];
    let openedLevelsArray = [];
    for (const cl of clearedLevelsStr) {
      clearedLevelsArray.push(Number(cl));
    }
    for (const ol of openedLevelsStr) {
      openedLevelsArray.push(Number(ol));
    }
    this.setState({
      clearedLevels: clearedLevelsArray,
      openedLevels: openedLevelsArray,
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
