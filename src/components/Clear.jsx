/* @flow */
import React from 'react';
import { Link } from 'react-router';
import Header from './Header';

export default class Clear extends React.Component {
  render() {
    const nextPlay: string = `/play/${(Number(this.props.params.level) + 1)}`;
    return (
      <div>
        <Header />
        <h2 style={style.clear}>Clear !!</h2>
        <div style={style.next}><Link to={nextPlay} style={style.nextLink}>next</Link></div>
        <div style={style.wrap}>
          <div style={style.home}><Link to="/" style={style.homeLink}>home</Link></div>
          <div style={style.share}>share</div>
        </div>
      </div>
    );
  }
}

const style = {
  clear: {
    marginTop: '150px',
    fontSize: '44px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffab00',
  },
  next: {
    textAlign: 'center',
  },
  nextLink: {
    display: 'inline-block',
    padding: '10px 0',
    width: '70%',
    border: '3px solid #4fc3f7',
    borderRadius: '10px',
    color: '#4fc3f7',
    fontSize: '30px',
    fontWeight: 'bold',
    textDecoration: 'none',
    backgroundColor: '#fefefe',
  },
  wrap: {
    margin: '20px auto 0',
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
  },
  home: {
    width: '47%',
    textAlign: 'center',
  },
  homeLink: {
    display: 'inline-block',
    padding: '10px 0',
    width: '100%',
    border: '2px solid #a5d6a7',
    borderRadius: '10px',
    color: '#a5d6a7',
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#fefefe',
  },
  share: {
    display: 'inline-block',
    padding: '10px 0',
    width: '47%',
    border: '2px solid #f48fb1',
    borderRadius: '10px',
    color: '#f48fb1',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    boxSizing: 'border-box',
    backgroundColor: '#fefefe',
  },
};
