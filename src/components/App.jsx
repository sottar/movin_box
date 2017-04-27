/* @flow */
import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>app</h1>
        <ul className="link">
          <li><Link to="/">Top</Link></li>
          <li><Link to="/list">list</Link></li>
          <li><Link to="/play">play</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
