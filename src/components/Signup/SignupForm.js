import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

class SignupForm extends Component {
  render() {
    const { handleSubmit, submitSignup } = this.props;

    return(
      <form
        onSubmit={handleSubmit(submitSignup)}
        className="form"
      >
        <div>
          <label htmlFor="email"> Email </label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="username"> Username </label>
          <Field name="username" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password"> Password </label>
          <Field name="password" component="input" type="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation"> Password Confirmation </label>
          <Field name="password_confirmation" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

SignupForm.propTypes = {
  submitSignup: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const SignupReduxForm = reduxForm({
  form: 'signup'
})(SignupForm);

export default SignupReduxForm;
