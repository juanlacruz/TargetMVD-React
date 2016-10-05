import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

import './Signup.css';
import SignupForm from './SignupForm';

class Signup extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Signup</h2>
          <SignupForm
            submitSignup={this.props.submitSignup}
            updateSignupForm={this.props.updateSignupForm}
            signupData={this.props.signupData}
          />
          {
            this.props.signupError ?
            <span>{this.props.signupError}</span> :
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
