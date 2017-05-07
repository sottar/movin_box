/* @flow */
import React from 'react';

export default class Header extends React.Component {
  createButtons() {
    if (this.props.buttons == 'backToList') {
      return(
        <div style={style.button} onClick={this.props.backToList}>←</div>
      );
    }
    return null;
  }

  render() {
    const buttons = this.createButtons();
    return (
      <div style={style.header}>
        {buttons}
        <h1 style={style.title}>Movin Box</h1>
      </div>
    );
  }
}

const style = {
  header: {
    position: 'relative',
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
  button: {
    position: 'absolute',
    top: '5px',
    left: '15px',
    fontSize: '25px',
    fontWeight: 'bold',
  },
};