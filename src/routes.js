import React from 'react';
import { Route, Link, IndexRoute } from 'react-router';

import App from './components/App/App';
import HomeContainer from './containers/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
  </Route>
);
