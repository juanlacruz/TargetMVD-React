import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import LoginContainer from './containers/Login';
import SignupContainer from './containers/Signup';
import HomeContainer from './containers/Home';
import Target from './components/Target/Target.js';

export const getRoutes = (store) => {
  const authRequired = (nextState, replace) => {
    const state = store.getState();
    const user = state.loginReducer.user;

    if (!user || !user.token) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };

  return (
    <Route path="/" component={App}>
      <IndexRoute component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/home" component={HomeContainer} onEnter={authRequired}/>
      <Route path="/login" component={LoginContainer} />
    </Route>
  );
};
