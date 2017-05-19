/* @flow */
import React from 'react';
import Header from './Header';
import Field from './Field';
import type { FieldInfo, BoxInfo } from '../Types';
import { FieldList } from './FieldList';

export default class Play extends React.Component {
  state: {
    fieldInfo: FieldInfo;
    boxInfo: Array<BoxInfo>;
    oldBoxInfo: Array<BoxInfo>;
    availableZone: Array<Array<number>>;
    touchStart: Array<number>;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      fieldInfo: {
        matrix: [],
        blockPosition: [],
        boxInfo: [],
        goalInfo: [],
      },
      boxInfo: [],
      oldBoxInfo: [],
      availableZone: [],
      touchStart: [], // [horizontal axis, vertical axis]
    };
    const that: any = this;
    that.moveBox = this.moveBox.bind(this);
    that.touchStart = this.touchStart.bind(this);
    that.touchEnd = this.touchEnd.bind(this);
    that.getNewBoxInfo = this.getNewBoxInfo.bind(this);
    that.updateAvailableZone = this.updateAvailableZone.bind(this);
    that.backToListPage = this.backToListPage.bind(this);
    that.resetField = this.resetField.bind(this);
    that.undoField = this.undoField.bind(this);
  }

  touchStart(event: any) {
    if (event.touches.length != 1) {
      return;
    }
    this.state.touchStart[0] = event.touches[0].screenX;
    this.state.touchStart[1] = event.touches[0].screenY;
    event.preventDefault();
  }

  touchEnd(event: any) {
    const id = Number(event.currentTarget.getAttribute('data-boxid'));
    if (event.changedTouches.length != 1) {
      return;
    }
    const deltaX = event.changedTouches[0].screenX - this.state.touchStart[0];
    const deltaY = event.changedTouches[0].screenY - this.state.touchStart[1];
    let direction: number = -1; // left:0, up:1, right:2, down:3, none: -1
    if (Math.abs(deltaX) > 3 * Math.abs(deltaY) && Math.abs(deltaX) > 30) {
      direction = deltaX > 0 ? 2 : 0;
    } else if (Math.abs(deltaY) > 3 * Math.abs(deltaX) && Math.abs(deltaY) > 30) {
      direction = deltaY > 0 ? 3 : 1;
    }
    if (direction != -1) {
      this.moveBox(id, direction);
    }
    return;
  }

  /**
   * move box and set new state
   */
  moveBox(boxId: number, direction: number): void {
    let currentBox: BoxInfo = {
      color: '',
      cleared: false,
      id: 0,
      position: [],
    };
    let boxInfo = this.state.boxInfo;
    for (let box of boxInfo) {
      if (box.id == boxId) {
        currentBox = box;
      }
    }
    if (currentBox == undefined) {
      return;
    }
    let oldBoxInfo =  JSON.parse(JSON.stringify(boxInfo));
    let newBoxInfo: Array<BoxInfo> = this.getNewBoxInfo(this.state.availableZone, oldBoxInfo, currentBox.position, direction, boxId);
    let newavailableZone = this.updateAvailableZone(boxInfo, JSON.parse(JSON.stringify(this.state.fieldInfo.blockPosition)));
    this.setState({
      boxInfo: newBoxInfo,
      oldBoxInfo: this.state.boxInfo,
      availableZone: newavailableZone,
    });
    if (this.isCleared(newBoxInfo)) {
      this.props.addClearedLevel(Number(this.props.params.level));
      this.props.addOpenedLevel(Number(this.props.params.level) + 1);
      const that = this;
      setTimeout(function() {
        that.props.router.push('/clear/' + that.props.params.level);
      }, 700);
    }
    boxInfo, oldBoxInfo, newBoxInfo, newavailableZone = null;
  }

  /**
   * get moved box infomation
   */
  getNewBoxInfo(availableZone: Array<Array<number>>, oldBoxInfo: Array<BoxInfo>, oldBoxPosition: Array<number>, direction: number, boxId: number): Array<BoxInfo> {
    let newBoxInfo = Object.assign(oldBoxInfo);
    if (direction == 0) { // left
      const searcherTarget = availableZone[oldBoxPosition[1]];
      let count = 0;
      for (let i = oldBoxPosition[0] - 1; i >= 0; i--) {
        if (searcherTarget[i] == 0) {
          count++;
        } else {
          break;
        }
      }
      newBoxInfo[boxId - 1].position[0] -= count;
    } else if (direction == 1) { // up
      let count = 0;
      for (let i = oldBoxPosition[1] - 1; i >= 0; i--) {
        if (availableZone[i][oldBoxPosition[0]] == 0) {
          count++;
        } else {
          break;
        }
      }
      newBoxInfo[boxId - 1].position[1] -= count;
    } else if (direction == 2) { // right
      const searcherTarget = availableZone[oldBoxPosition[1]];
      let count = 0;
      for (let i = oldBoxPosition[0] + 1, len = searcherTarget.length; i < len; i++) {
        if (searcherTarget[i] == 0) {
          count++;
        } else {
          break;
        }
      }
      newBoxInfo[boxId - 1].position[0] += count;
    } else if (direction == 3) { // down
      let count = 0;
      for (let i = oldBoxPosition[1] + 1, len = availableZone.length; i < len; i++) {
        if (availableZone[i][oldBoxPosition[0]] == 0) {
          count++;
        } else {
          break;
        }
      }
      newBoxInfo[boxId - 1].position[1] += count;
    }
    for (let goal of this.state.fieldInfo.goalInfo) {
      if (newBoxInfo[boxId - 1].position[0] == goal.position[0] && newBoxInfo[boxId - 1].position[1] == goal.position[1]) {
        newBoxInfo[boxId - 1].cleared = true;
        break;
      }
      newBoxInfo[boxId - 1].cleared = false;
    }
    return newBoxInfo;
  }

  updateAvailableZone(boxInfo: Array<BoxInfo>, blockPosition: Array<Array<number>>): Array<Array<number>> {
    for (const box of boxInfo) {
      const x = box.position[0];
      const y = box.position[1];
      blockPosition[y][x] = 1;
    }
    return blockPosition;
  }

  /**
   * check clear the game
   */
  isCleared(boxInfo: Array<BoxInfo>): boolean {
    for (const box of boxInfo) {
      if (box.cleared != true) {
        return false;
      }
    }
    return true;
  }

  /**
   * end and back to list page
   */
  backToListPage() {
    this.props.router.push('/list');
  }

  /**
   * reset current game
   */
  resetField() {
    const initFiled: FieldInfo = JSON.parse(JSON.stringify(FieldList))[this.props.params.level - 1];
    this.setState({
      fieldInfo: initFiled,
      boxInfo: initFiled.boxInfo,
    });
  }

  /**
   * undo the previous action
   */
  undoField() {
    this.setState({
      boxInfo: this.state.oldBoxInfo,
    });
  }

  componentWillMount() {
    const currentFiled: FieldInfo = JSON.parse(JSON.stringify(FieldList))[this.props.params.level - 1];
    const newAvailableZone = this.updateAvailableZone(
            currentFiled.boxInfo,
            JSON.parse(JSON.stringify(FieldList[this.props.params.level - 1].blockPosition)));
    this.setState({
      fieldInfo: currentFiled,
      boxInfo: currentFiled.boxInfo,
      oldBoxInfo: currentFiled.boxInfo,
      availableZone: newAvailableZone,
    });
  }

  render() {
    return (
      <div>
        <Header
          buttons='backToList'
          backToList={this.backToListPage}
        />
        <Field
          level={this.props.level}
          fieldInfo={this.state.fieldInfo}
          boxInfoList={this.state.boxInfo}
          oldBoxInfoList={this.state.oldBoxInfo}
          onTouchStart={this.touchStart}
          onTouchEnd={this.touchEnd}
          resetField={this.resetField}
          undoField={this.undoField}
        />
      </div>
    );
  }
}
