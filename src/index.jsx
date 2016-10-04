import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';

import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './index.css';

const reducer = combineReducers(reducers);
let store = createStore(
  reducer,
  applyMiddleware(thunk)
);

class ReduxAppWrapper extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

ReactDOM.render(
  <ReduxAppWrapper />,
  document.getElementById('react-root')
);
