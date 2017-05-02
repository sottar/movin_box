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
    touchStart: Array<number>;
  }
  constructor(props: any) {
    super(props);
    this.state = {
      fieldInfo: null,
      boxInfo: null,
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
    if (direction == 2) {
      let oldInfo = Object.assign(this.state.boxInfo);
      if (oldInfo == null || oldInfo[boxId - 1] == null) {
        return;
      }
      oldInfo[boxId - 1].position = [6,2];
      this.setState({
        boxInfo: oldInfo,
      });
    }
  }
  componentWillMount() {
    const currentFiled: FieldInfo = FieldList[this.props.params.level - 1];
    this.setState({
      fieldInfo: currentFiled,
      boxInfo: currentFiled.boxInfo,
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
