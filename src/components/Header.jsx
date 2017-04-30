/* @flow */
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div style={style.header}>
        <h1 style={style.title}>Movin Box</h1>
      </div>
    );
  }
}

const style = {
  header: {
    background: '#fefefe',
    borderTop: '4px solid #4fc3f7',
    borderBottom: '1px solid #efefef',
  },
  title: {
    margin: 0,
    padding: '5px',
    textAlign: 'center',
    fontSize: '24px',
  },
};