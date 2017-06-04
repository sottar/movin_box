/* @flow */
import React from 'react';
import { Link } from 'react-router';
import { m } from '../utils';

export default class LevelList extends React.Component {
  render() {
    const levelPerColumn: number = 4;
    let result: Array<Object> = [];
    for (let i = 1; i <= Math.ceil(this.props.levelPerPages / levelPerColumn); i++) {
      let list: Array<Object> = [];
      for (let n = 0; n < levelPerColumn; n++) {
        let currentNum: number = (i - 1) * levelPerColumn + 1 + n;
        if (this.props.clearedLevels.indexOf(currentNum) >= 0) {
          list.push(
            <li key={currentNum} style={style.box}>
              <Link to={`/play/${currentNum}`} style={m(style.link, style.clearedLink)}>
                {currentNum}
              </Link>
            </li>
          );
        } else if (this.props.openedLevels.indexOf(currentNum) >= 0) {
          list.push(
            <li key={currentNum} style={style.box}>
              <Link to={`/play/${currentNum}`} style={m(style.link, style.openedLink)}>
                {currentNum}
              </Link>
            </li>
          );
        } else {
          list.push(<li key={currentNum} style={m(style.box, style.closedBox)}>{currentNum}</li>);
        }
      }
      result.push(
        <ul key={i} style={style.listWraper}>
          {list}
        </ul>
      );
    }
    return (
      <div style={style.levelList}>
        {result}
      </div>
    );
  }
}

const style = {
  levelList: {
    margin: '30px auto 0',
    width: '80%',
  },
  listWraper: {
    display: 'flex',
    margin: 0,
    paddingLeft: 0,
  },
  box: {
    flex: 1,
    display: 'block',
    margin: '8px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
  },
  closedBox: {
    background: '#616161',
  },
  link: {
    display: 'block',
    textDecoration: 'none',
  },
  clearedLink: {
    background: '#4fc3f7',
    color: '#eee',
  },
  openedLink: {
    background: '#e0e0e0',
    color: '#4fc3f7',
  },
};
