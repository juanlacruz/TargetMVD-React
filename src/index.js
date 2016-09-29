import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

import App from './components/App/App';
import './index.css';

const reducer = combineReducers(reducers);
let store = createStore(reducer);

class ReduxAppWrapper extends Component {
  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(
  <ReduxAppWrapper />,
  document.getElementById('root')
);
