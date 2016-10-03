import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import Config from 'Config';
import { login, logout, } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.loginReducer.user,
    loginData: state.loginReducer.loginData,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitLogin: (loginData) => {
      axios.post(Config.serverUrl + 'users', loginData)
        .then(function (response) {
          dispatch(login(response));
          console.log(response);
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
