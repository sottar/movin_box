/* @flow */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import configureStore from './configureStore';
import App from './components/App';
import Top from './components/Top';
import List from './components/List';
import Play from './containers/Play';
import Clear from './components/Clear';

const initialState = {
  gameReducer: {
    fieldInfo: {
      matrix: [],
      blockPosition: [],
      boxInfo: [],
      goalInfo: [],
    },
    boxInfo: [],
    oldBoxInfo: [],
    availableZone: [],
    touchStart: [], // [horizontal axis, vertical axis]
  },
};
const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Top} />
            <Route path="/list" component={List} />
            <Route path="/play/:level" component={Play} />
            <Route path="/clear/:level" component={Clear} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
