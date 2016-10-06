import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
  render() {
    const { handleSubmit, submitLogin } = this.props;
    return(
      <form
        onSubmit={handleSubmit(submitLogin)}
        className="form"
      >
        <div>
          <label htmlFor="email"> Email </label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password"> Password </label>
          <Field name="password" component="input" type="password" />
        </div>
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
  form: 'login'
})(LoginForm);

export default LoginReduxForm;
