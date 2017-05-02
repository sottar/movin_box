/* @flow */
import React from 'react';
import type {FieldInfo} from '../Types';

export default class Field extends React.Component {
  constructor(props: any) {
    super(props);
  }
  createMatrix(fieldInfo: FieldInfo): Array<React.Element<*>> {
    let result: Array<React.Element<*>> = [];
    const horizontal: number = fieldInfo.matrix[0];
    const vertical: number = fieldInfo.matrix[1];
    const cellSize: number = 40;
    const style = {
      wrap: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '100px auto 0',
        width: horizontal * cellSize,
        height: vertical * cellSize,
        border: '2px solid #333',
        background: '#fefefe',
      },
      cells: {
        margin: 0,
        width: cellSize + 'px',
        height: cellSize + 'px',
        boxSizing: 'border-box',
        border: '1px solid #333',
      },
    };
    let cells = [];
    for (let i = 1; i <= horizontal * vertical; i++) {
      cells.push(
        <div style={style.cells} key={i}></div>
      );
    }
    result.push(
      <div style={style.wrap} key={0}>{cells}</div>
    );
    return result;
  }
  render() {
    const matrix = this.createMatrix(this.props.fieldInfo);
    return (
      <div>
        {matrix}
      </div>
    );
  }
}
