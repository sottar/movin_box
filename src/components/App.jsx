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
    const that: any = this;
    that.addClearedLevel = this.addClearedLevel.bind(this);
    that.addOpenedLevel = this.addOpenedLevel.bind(this);
  }

  /**
   * add cleared levels to state and localstorage
   */
  addClearedLevel(addLevel: number) {
    let clearedLevels = this.state.clearedLevels;
    clearedLevels.push(addLevel);
    this.setState({
      clearedLevels: clearedLevels,
    });
    this.updateClearedLevels(clearedLevels.toString());
    clearedLevels = null;
  }

  /**
   * add opended levels to state and localstorage
   */
  addOpenedLevel(addLevel: number) {
    let openedLevels = this.state.openedLevels;
    openedLevels.push(addLevel);
    this.setState({
      openedLevels: openedLevels,
    });
    this.updateOpenedLevels(openedLevels.toString());
    openedLevels = null;
  }

  /**
   * update cleared level to localstorage
   */
  updateClearedLevels(clearedLevels: string) {
    let storage = new Storage();
    storage.saveLocalStorage('clearedLevels', clearedLevels);
    storage = null;
  }

  /**
   * update opened level to localstorage
   */
  updateOpenedLevels(openedLevels: string) {
    let storage = new Storage();
    storage.saveLocalStorage('openedLevels', openedLevels);
    storage = null;
  }

  componentWillMount() {
    let storage = new Storage();
    let clearedLevelsStr = storage.getLocalStorage('clearedLevels');
    let openedLevelsStr = storage.getLocalStorage('openedLevels');
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
    storage, clearedLevelsStr, openedLevelsStr, clearedLevelsArray, openedLevelsArray = null;
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
