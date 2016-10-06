import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

import './Signup.css';
import SignupForm from './SignupForm';

class Signup extends Component {
  render() {
    const { submitSignup, updateSignupForm, signupData,
      signupError} = this.props;

    return (
      <div>
        <div>
          <h2>Signup</h2>
          <SignupForm
            submitSignup={submitSignup}
            updateSignupForm={updateSignupForm}
            signupData={signupData}
          />
          {
            signupError ?
            <span>{signupError}</span> :
            null
          }
          <Link to='/'>Log In</Link>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  submitSignup: PropTypes.func.isRequired,
  updateSignupForm: PropTypes.func.isRequired,
  signupData: PropTypes.object,
  signupError: PropTypes.string,
}

export default Signup;
