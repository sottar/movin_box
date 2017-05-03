/* @flow */
import React from 'react';
import Header from './Header';
import Field from './Field';
import type { FieldInfo, BoxInfo } from '../Types';
import { FieldList } from './FieldList';

export default class Play extends React.Component {
  state: {
    fieldInfo: ?FieldInfo;
    boxInfo: ?Array<BoxInfo>;
    availableZone: ?Array<Array<number>>;
    touchStart: Array<number>;
  }
  constructor(props: any) {
    super(props);
    this.state = {
      fieldInfo: null,
      boxInfo: null,
      availableZone: null,
      touchStart: [], // [horizontal axis, vertical axis]
    };
    this.moveBox = this.moveBox.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
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
  moveBox(boxId: number, direction: number): void {
    let currentBox: BoxInfo;
    if (this.state.fieldInfo == null) {
      return;
    }
    for (let box of this.state.fieldInfo.boxInfo) {
      if (box.id == boxId) {
        currentBox = box;
      }
    }
    const oldBoxPosition = currentBox.position;
    let oldBoxInfo = Object.assign(this.state.boxInfo);
    if (direction == 2) {
      if (oldBoxInfo == null || oldBoxInfo[boxId - 1] == null) {
        return;
      }
      const searcher = this.state.availableZone[oldBoxPosition[1]];
      let count = 0;
      for (let i = oldBoxPosition[0] + 1; i < searcher.length; i++) {
        if (searcher[i] == 0) {
          count++;
        }
      }
      oldBoxInfo[boxId - 1].position[0] += count;
    }
    let newavailableZone =this.updateAvailableZone(oldBoxInfo, JSON.parse(JSON.stringify(this.state.fieldInfo.blockPosition)));
    this.setState({
      boxInfo: oldBoxInfo,
      availableZone: newavailableZone,
    });
  }
  updateAvailableZone(boxInfo, blockPosition) {
    let newAvailbleZone = blockPosition;
    for (const box of boxInfo) {
      const x = box.position[0];
      const y = box.position[1];
      newAvailbleZone[y][x] = 1;
    }
    return newAvailbleZone;
  }
  componentWillMount() {
    const currentFiled: FieldInfo = JSON.parse(JSON.stringify(FieldList))[this.props.params.level - 1];
    const newAvailableZone = this.updateAvailableZone(
            currentFiled.boxInfo,
            JSON.parse(JSON.stringify(FieldList[this.props.params.level - 1].blockPosition)));
    this.setState({
      fieldInfo: currentFiled,
      boxInfo: currentFiled.boxInfo,
      availableZone: newAvailableZone,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Field
          level={this.props.level}
          fieldInfo={this.state.fieldInfo}
          boxInfoList={this.state.boxInfo}
          onTouchStart={this.touchStart}
          onTouchEnd={this.touchEnd}
        />
      </div>
    );
  }
}
