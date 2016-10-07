import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { validate as validateForm } from 'validate.js';
import FormField from './FormField';

const errorMessages = {
  email: 'Oops! this email is not valid',
  password: 'You must enter your password',
}

const loginDataConstraints = {
  email: {
    presence: { message: errorMessages.email },
    email: { message: errorMessages.email },
  },
  password: {
    presence: { message: errorMessages.password },
  },
}

const validate = values => {
  let errors = validateForm(values, loginDataConstraints, {fullMessages: false});
  return (errors ? errors : {});
}

class LoginForm extends Component {
  render() {
    const { handleSubmit, submitLogin } = this.props;

    return(
      <form
        onSubmit={ handleSubmit(submitLogin) }
        className="form"
      >
        <Field name="email" component={FormField} type="email" label="Email" />
        <Field name="password" component={FormField} type="password" label="Password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

const LoginReduxForm = reduxForm({
  form: 'login',
  validate
})(LoginForm);

export default LoginReduxForm;
