import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import * as constants from '../../constants';
import smilies from '../../assets/smilies.png'

import '../../styles/Login.scss';
import LoginForm from './LoginForm';

class Login extends Component {
  componentWillMount() {
    if (localStorage.getItem(constants.AUTH_TOKEN_KEY)) {
      browserHistory.push('/home');
    }
  }

  render() {
    const { submitLogin, loginError } = this.props;
    return (
      <div className="container">
        <img src={smilies} />
        <h1>Welcome to <b>TARGET</b></h1>
        <LoginForm
          submitLogin={submitLogin}
        />
        {
          loginError && <span>{loginError}</span>
        }
        <Link className="sub-title margin-top-target" to="/signup">Sign Up</Link>
      </div>
    );
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  loginError: PropTypes.string,
};

export default Login;
