import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import axios from 'axios';
import Config from 'Config';
import persistState from 'redux-localstorage';

import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/index.scss';

Object.assign(reducers, { form: formReducer });
const reducer = combineReducers(reducers);

let persistPath = 'loginReducer';
let persistSlicer = (path) => {
  return (state) => {
    let subset = {};
    subset[path] = {};

    subset[path].user = state.loginReducer.user;
    subset[path].authenticated = state.loginReducer.authenticated;
    return subset;
  };
};

const enhancer = compose(
  applyMiddleware(thunk),
  persistState(persistPath, { slicer: persistSlicer }),
);

let store = createStore(
  reducer,
  enhancer
);

class ReduxAppWrapper extends Component {
  componentWillMount() {
    axios.defaults.headers.common['Content-Type'] = '*/*';
    axios.defaults.headers.common['Accept'] = '*/*';
    axios.defaults.baseURL = Config.serverUrl;
  }

  render() {
    return (
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
