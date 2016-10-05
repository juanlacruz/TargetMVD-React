import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import LoginContainer from './containers/Login';
import SignupContainer from './containers/Signup';
import HomeContainer from './containers/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/home" component={HomeContainer} />
  </Route>
);
