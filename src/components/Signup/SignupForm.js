import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from '../common/FormField';
import { validate as validateForm } from 'validate.js';
import * as constants from '../../constants';
import '../../styles/Common.scss';

const errorMessages = {
  email: 'Oops! this email is not valid',
  username: 'You forgot to put your name!',
  password: 'The password must be ' + constants.MIN_PASSWORD_LENGTH + ' characters long',
  password_confirmation: 'Passwords don\'t match',
};

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
    presence: { message: errorMessages.password_confirmation },
    equality: {
      attribute: 'password',
      message: errorMessages.password_confirmation,
    },
  },
};

const validate = values => {
  let errors = validateForm(values, signupDataConstraints, { fullMessages: false });
  return (errors ? errors : {});
};

class SignupForm extends Component {
  render() {
    const { handleSubmit, submitSignup, submitEdit, isEdit, user } = this.props;
    let submitAction = isEdit ? submitEdit : submitSignup;

    return (
      <form
        onSubmit={handleSubmit((values) => this.customHandleSubmit(values, user, submitAction))}
        className="form container-form"
      >
        <Field name="name" component={FormField} type="text" label="NAME"/>
        <Field name="email" component={FormField} type="email" label="EMAIL"/>
        {!isEdit && <Field name="password" component={FormField} type="password" label="PASSWORD"/>}
        {!isEdit && <Field name="password_confirmation" component={FormField} type="password" label="CONFIRMATION PASSWORD"
               placeholder="Min. 6 characters long"/>}
        <Field name="gender" component={FormField} type="text" label="GENDER" placeholder="Select Your Gender" />
        <button className="button-target" type="submit">{!isEdit && 'SIGN UP' || 'CONFIRM'}</button>
      </form>
    );
  }

  customHandleSubmit(values, user, submitAction) {
    values.id = user.user_id;
    submitAction(values);
  }
}

SignupForm.propTypes = {
  submitSignup: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitEdit: PropTypes.func.isRequired
};

const SignupReduxForm = reduxForm({
  form: 'signup',
  validate
})(SignupForm);

export default SignupReduxForm;
