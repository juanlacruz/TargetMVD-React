import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router'

import './Login.css';
import LoginForm from './LoginForm';

class Login extends Component {
  componentWillMount() {
    if(localStorage.getItem('auth_token')) {
      browserHistory.push('/home');
    }
  }

  render() {
    return (
      <div>
        <div>
          <h2>Login</h2>
          <LoginForm
            submitLogin={this.props.submitLogin}
            loginData={this.props.loginData}
          />
          <Link to='/signup'>Sign Up</Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  loginData: PropTypes.object,
}

export default Login;
