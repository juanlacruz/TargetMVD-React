import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import Config from 'Config';
import { login, updateLoginForm, resetLoginForm, loginRequest }
from '../actions/loginActions';
import axios from 'axios';
import { browserHistory } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.loginReducer.user,
    loginData: state.loginReducer.loginData,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitLogin: (loginData) => {
      dispatch(login(loginData));
    },
    updateLoginForm: (field, value) => dispatch(updateLoginForm(field, value)),
  };
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer;
