/* @flow */
import React from 'react';
import { Link } from 'react-router';

export default class Top extends React.Component {
  render() {
    return (
      <div>
        <h1 style={style.title}>Movin Box</h1>
        <div style={style.start}>
          <Link to="/list" style={style.button}>Start !</Link>
        </div>
      </div>
    );
  }
}

const style = {
  title: {
    margin: '180px auto 70px',
    padding: '15px 0',
    fontSize: '44px',
    color: '#4fc3f7',
    textAlign: 'center',
  },
  start: {
    textAlign: 'center',
  },
  button: {
    margin: '0 auto',
    padding: '20px 0',
    width: '70%',
    display: 'block',
    border: '1px solid #4fc3f7',
    borderRadius: '5px',
    boxShadow: '0px 3px 0px #4fc3f7,inset 0px 0px 2px #fff',
    fontSize: '24px',
    color: '#4fc3f7',
    fontWeight: 'bold',
    textDecoration: 'none',
    backgroundColor: '#fefefe',
  },
};