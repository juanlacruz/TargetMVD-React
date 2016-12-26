import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import '../../styles/Signup.scss';
import '../../styles/Common.scss';
import SignupForm from './SignupForm';

class Signup extends Component {
  render() {
    const { submitSignup, signupError } = this.props;

    return (
      <div className="container">
        <h1 className="title">sign up</h1>
        <SignupForm
          submitSignup={submitSignup}
        />
        {
          signupError && <span>{signupError}</span>
        }
        <div className="line-separator margin-top-target"></div>
        <h3 className="sub-title">sign in</h3>
      </div>
    );
  }
}

Signup.propTypes = {
  submitSignup: PropTypes.func.isRequired,
  signupError: PropTypes.string,
};

export default Signup;
