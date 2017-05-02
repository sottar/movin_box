/* @flow */
import React from 'react';
import Header from './Header';
import Field from './Field';
import type { FieldInfo } from '../Types';
import { FieldList } from './FieldList';

export default class Play extends React.Component {
  state: {
    fieldInfo: ?FieldInfo;
    startPosition: Array<number>;
  }
  constructor(props: any) {
    super(props);
    this.state = {
      fieldInfo: null,
      startPosition: [], // [horizontal axis, vertical axis]
    };
    this.moveBox = this.moveBox.bind(this);
    this.touchStart = this.touchStart.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
  }
  touchStart(event: any) {
    if (event.touches.length != 1) {
      return;
    }
    this.state.startPosition[0] = event.touches[0].screenX;
    this.state.startPosition[1] = event.touches[0].screenY;
    event.preventDefault();
  }
  touchEnd(event: any) {
    const id = Number(event.currentTarget.getAttribute('data-boxid'));
    if (event.changedTouches.length != 1) {
      return;
    }
    const deltaX = event.changedTouches[0].screenX - this.state.startPosition[0];
    const deltaY = event.changedTouches[0].screenY - this.state.startPosition[1];
    let direction: number = -1; // left:0, up:1, right:2, down:3
    if (Math.abs(deltaX) > 3 * Math.abs(deltaY) && Math.abs(deltaX) > 30) {
      direction = deltaX > 0 ? 2 : 0;
    } else if (Math.abs(deltaY) > 3 * Math.abs(deltaX) && Math.abs(deltaY) > 30) {
      direction = deltaY > 0 ? 3 : 1;
    }
    this.moveBox(id, direction);
  }
  moveBox(boxId: number, direction: number): void {
    console.log('boxId: ', boxId);
    console.log('direction: ', direction);
  }
  componentWillMount() {
    const currentFiled = FieldList[this.props.params.level - 1];
    this.setState({
      fieldInfo: currentFiled,
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Field
          level={this.props.level}
          fieldInfo={this.state.fieldInfo}
          onTouchStart={this.touchStart}
          onTouchEnd={this.touchEnd}
        />
      </div>
    );
  }
}
