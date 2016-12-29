import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import LoginContainer from './containers/Login';
import SignupContainer from './containers/Signup';
import HomeContainer from './containers/Home';
import GoogleMaps from './components/common/Map.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/home" component={HomeContainer} />
    <Route path="/login" component={LoginContainer} />
  </Route>
);
