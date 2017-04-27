/* @flow */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './configureStore';
import App from './components/App';
import Top from './components/Top';
import List from './components/List';
import Play from './components/Play';

const store = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Top} />
            <Route path="/list" component={List} />
            <Route path="/play" component={Play} />
          </Route>
        </Router>
      </Provider>
    );
  }
}