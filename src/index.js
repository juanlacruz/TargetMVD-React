import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import axios from 'axios';
import Config from 'Config';

import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/index.scss';

Object.assign(reducers, { form: formReducer });
const reducer = combineReducers(reducers);
let store = createStore(
  reducer,
  applyMiddleware(thunk)
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
