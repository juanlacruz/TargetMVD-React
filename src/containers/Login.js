import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import Config from 'Config';
import { login, logout, updateLoginForm, resetLoginForm } from '../actions/loginActions';
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
      axios.post(Config.serverUrl + 'users/sign_in', {user: loginData})
        .then(function (response) {
          let userData = response.data;
          dispatch(login(userData));
          browserHistory.push('/home');
        })
        .catch(function (error) {
          dispatch(resetLoginForm())
          console.log(error);
        });
    },
    updateLoginForm: (field, value) => dispatch(updateLoginForm(field, value)),
  };
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer;
