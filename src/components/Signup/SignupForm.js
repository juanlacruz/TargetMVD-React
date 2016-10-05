import React, { Component, PropTypes } from 'react';

class SignupForm extends Component {
  render() {
    let signupData = this.props.signupData;
    let updateSignupForm = this.props.updateSignupForm;

    return(
      <form
        onSubmit={
          (e) => {
            e.preventDefault();
            this.props.submitSignup(signupData);
          }}
        className="form"
      >
        <input type="text" name="email"
          value={signupData.email}
          onChange={(event) => updateSignupForm('email', event.target.value)}
        />
        <input type="text" name="username"
          value={signupData.username}
          onChange={(event) => updateSignupForm('username', event.target.value)}
        />
        <input type="password" name="password"
          value={signupData.password}
          onChange={(event) => updateSignupForm('password', event.target.value)}
        />
        <input type="password" name="password_confirmation"
          value={signupData.password_confirmation}
          onChange={(event) => updateSignupForm('password_confirmation', event.target.value)}
        />
        <input type="submit" value="Signup"/>
      </form>
    );
  }
}

SignupForm.propTypes = {
  submitSignup: PropTypes.func.isRequired,
  updateSignupForm: PropTypes.func.isRequired,
  signupData: PropTypes.object,
}

export default SignupForm;
