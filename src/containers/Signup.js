import { connect } from 'react-redux';
import Signup from '../components/Signup/Signup';
import { signup, updateSignupForm } from '../actions/signupActions';

const mapStateToProps = (state) => {
  return {
    signupData: state.signupReducer.signupData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitSignup: (signupData) => {
      dispatch(signup(signupData));
    },
    updateSignupForm: (field, value) => dispatch(updateSignupForm(field, value)),
  };
}

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)

export default SignupContainer;
