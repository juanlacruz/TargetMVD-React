import React, { Component, PropTypes } from 'react';

class LoginForm extends Component {
  render() {
    let loginData = this.props.loginData;
    let updateLoginForm = this.props.updateLoginForm;

    return(
      <form
        onSubmit={
          (e) => {
            e.preventDefault();
            this.props.submitLogin(loginData);
          }}
        className="form"
      >
        <input type="text" name="email"
          value={loginData.email}
          onChange={(event) => updateLoginForm('email', event.target.value)}
        />
        <input type="text" name="password"
          value={loginData.password}
          onChange={(event) => updateLoginForm('password', event.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

LoginForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  loginData: PropTypes.object,
}

export default LoginForm;
