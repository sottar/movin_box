/* @flow */
import React from 'react';
import type { FieldInfo, BoxInfo, GoalInfo } from '../Types';
import { m } from '../utils';

export default class Field extends React.Component {
  constructor(props: any) {
    super(props);
  }
  createMatrix(fieldInfo: FieldInfo, boxInfoList: Array<BoxInfo>): Array<React.Element<*>> {
    let result: Array<React.Element<*>> = [];
    const horizontal: number = fieldInfo.matrix[0];
    const vertical: number = fieldInfo.matrix[1];
    const cellSize: number = 40;
    const style = {
      wrap: {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '100px auto 0',
        width: horizontal * cellSize,
        height: vertical * cellSize,
        border: '2px solid #333',
        background: '#fefefe',
      },
    };
    const cells = this.createCells(fieldInfo, cellSize);
    const boxes = this.createBoxes(boxInfoList, cellSize);
    const goals = this.createGoals(fieldInfo, cellSize);
    result.push(
      <div style={style.wrap} key={0}>{cells}{boxes}{goals}</div>
    );
    return result;
  }
  createCells(fieldInfo: FieldInfo, cellSize: number): Array<React.Element<*>> {
    const style = {
      cells: {
        margin: 0,
        width: cellSize + 'px',
        height: cellSize + 'px',
        boxSizing: 'border-box',
        border: '1px solid #333',
      },
      blockCell: {
        backgroundColor: '#555',
      },
    };
    let cells = [];
    for (let v = 0, vlen = fieldInfo.blockPosition.length; v < vlen; v++) {
      for (let h = 0, hlen = fieldInfo.blockPosition[v].length; h < hlen; h++) {
        if (fieldInfo.blockPosition[v][h] == 1) {
          cells.push(<div style={m(style.cells, style.blockCell)} key={v + ',' + h}></div>);
        } else {
          cells.push(<div style={style.cells} key={v + ',' + h}></div>);
        }
      }
    }
    return cells;
  }
  createBoxes(boxInfoList: Array<BoxInfo>, cellSize: number): Array<React.Element<*>> {
    let boxes = [];
    const style = {
      box: {
        position: 'absolute',
        margin: 0,
        width: cellSize + 'px',
        height: cellSize + 'px',
        boxSizing: 'border-box',
        border: '1px solid #333',
        transition: 'all 0.5s',
      },
    };
    for (let i = 0, len = boxInfoList.length; i < len; i++) {
      const currentStyle = {
        backgroundColor: boxInfoList[i].color,
        left: boxInfoList[i].position[0] * cellSize,
        top: boxInfoList[i].position[1] * cellSize,
      };
      boxes.push(<div style={m(style.box, currentStyle)} key={i} onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)} data-boxid={boxInfoList[i].id}></div>);
    }
    return boxes;
  }
  createGoals(fieldInfo: FieldInfo, cellSize: number) {
    let goals = [];
    const style = {
      goal: {
        position: 'absolute',
        margin: 0,
        width: cellSize / 2 + 'px',
        height: cellSize / 2 + 'px',
        boxSizing: 'border-box',
        borderRadius: '50% 50%',
        border: '1px solid #333',
      },
    };
    const goalInfo: Array<GoalInfo> = fieldInfo.goalInfo;
    for (let i = 0, len = goalInfo.length; i < len; i++) {
      const currentStyle = {
        backgroundColor: goalInfo[i].color,
        left: goalInfo[i].position[0] * cellSize + cellSize / 4,
        top: goalInfo[i].position[1] * cellSize + cellSize / 4,
      };
      goals.push(<div style={m(style.goal, currentStyle)} key={i}></div>);
    }
    return goals;
  }
  handleTouchStart(e: any): void {
    this.props.onTouchStart(e);
  }
  handleTouchEnd(e: any): void {
    this.props.onTouchEnd(e);
  }
  render() {
    const matrix = this.createMatrix(this.props.fieldInfo, this.props.boxInfoList);
    return (
      <div>
        {matrix}
      </div>
    );
  }
}
