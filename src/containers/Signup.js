import { connect } from 'react-redux';
import Signup from '../components/Signup/Signup';
import { signup } from '../actions/signupActions';

const mapStateToProps = (state) => {
  return {
    signupError: state.signupReducer.signupError,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitSignup: (signupData) => {
      dispatch(signup(signupData));
    },
  };
}

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)

export default SignupContainer;
