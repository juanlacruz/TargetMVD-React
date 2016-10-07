import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { login } from '../actions/loginActions';

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    loginError: state.loginReducer.loginError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: (loginData) => {
      dispatch(login(loginData));
    },
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
