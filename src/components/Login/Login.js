import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import * as constants from '../../constants';

import './Login.css';
import LoginForm from './LoginForm';

class Login extends Component {
  componentWillMount() {
    if(localStorage.getItem(constants.AUTH_TOKEN_KEY)) {
      browserHistory.push('/home');
    }
  }

  render() {
    const { submitLogin, loginError} = this.props;
    return (
      <div>
        <div>
          <h2>Login</h2>
          <LoginForm
            submitLogin={submitLogin}
          />
          {
            loginError ?
            <span>{loginError}</span> :
            null
          }
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  loginError: PropTypes.string,
}

export default Login;
