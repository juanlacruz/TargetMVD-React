import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { login, updateLoginForm } from '../actions/loginActions';

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    loginData: state.loginReducer.loginData,
    loginError: state.loginReducer.loginError,
  };
}

const mapDispatchToProps = (dispatch) => {
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
