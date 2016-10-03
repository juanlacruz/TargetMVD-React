import React, { Component, PropTypes } from 'react';

class LoginForm extends Component {
  render() {
    let loginData = this.props.loginData;

    return(
      <form
        onSubmit={() => this.props.submitLogin(loginData)}
        className="form"
      >
        <input type="text" name="username" value={loginData.username}/>
        <input type="text" name="password" value={loginData.password}/>
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
