/* @flow */
import React from 'react';

export default class Field extends React.Component {
  constructor(props: any) {
    super(props);
  }
  createMatrix(horizontal: number, vertical: number): Array<React.Element<*>> {
    let result: Array<React.Element<*>> = [];
    const style = {
      wrap: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '100px auto 0',
        width: horizontal * 40,
        height: vertical * 40,
        border: '2px solid #333',
        background: '#fefefe',
      },
      cells: {
        margin: 0,
        width: '40px',
        height: '40px',
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
    const matrix = this.createMatrix(this.props.matrix[0], this.props.matrix[1]);
    return (
      <div>
        {matrix}
      </div>
    );
  }
}
