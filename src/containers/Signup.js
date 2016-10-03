import { connect } from 'react-redux';
import Signup from '../components/Signup/Signup';
import Config from 'Config';
import { signup, resetSignupForm, updateSignupForm } from '../actions';
import axios from 'axios';
import { browserHistory } from 'react-router'

const mapStateToProps = (state, ownProps) => {
  return {
    signupData: state.signupReducer.signupData,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitSignup: (signupData) => {
      axios.post(Config.serverUrl + 'users', {user: signupData})
        .then((response) => {
          let userData = response.data;
          dispatch(signup(userData));
          browserHistory.push('/home');
        })
        .catch((error) => {
          console.log(error);
          dispatch(resetSignupForm())
        });
    },
    updateSignupForm: (field, value) => dispatch(updateSignupForm(field, value)),
  };
}

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)

export default SignupContainer;
