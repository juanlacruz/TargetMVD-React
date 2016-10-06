import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './FormField';
import {validate as validateForm} from 'validate.js';
import * as constants from '../../constants';

const errorMessages = {
  email: 'Oops! this email is not valid',
  username: 'You forgot to put your name!',
  password: 'The password must be ' + constants.MIN_PASSWORD_LENGTH + ' characters long',
  password_confirmation: 'Passwords don\'t match',
}

const signupDataConstraints = {
  email: {
    presence: { message: errorMessages.email },
    email: { message: errorMessages.email },
  },
  username: {
    presence: { message: errorMessages.username },
  },
  password: {
    presence: { message: errorMessages.password },
    length: {
      minimum: constants.MIN_PASSWORD_LENGTH,
      tooShort: errorMessages.password,
    },
  },
  password_confirmation: {
    presence: { message: errorMessages.password },
    equality: {
      attribute: 'password',
      message: errorMessages.password_confirmation,
    },
  },
}

const validate = values => {
  return validateForm(values, signupDataConstraints, {fullMessages: false});
}

class SignupForm extends Component {
  render() {
    const { handleSubmit, submitSignup } = this.props;
    return(
      <form
        onSubmit={handleSubmit(submitSignup)}
        className="form"
      >
        <Field name="email" component={FormField} type="email" label="Email" />
        <Field name="username" component={FormField} type="text" label="Username"/>
        <Field name="password" component={FormField} type="password" label="Password" />
        <Field name="password_confirmation" component={FormField} type="password" label="Password Confirmation" />
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
  form: 'signup',
  validate
})(SignupForm);

export default SignupReduxForm;
