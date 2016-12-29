import { connect } from 'react-redux';
import Signup from '../components/Signup/Signup';
import { signup } from '../actions/signupActions';
import { editProfile } from '../actions/signupActions'

const mapStateToProps = (state) => {
  return {
    signupError: state.signupReducer.signupError,
    user: state.loginReducer.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSignup: (signupData) => {
      dispatch(signup(signupData));
    },
    submitEdit: (editData) => {
      dispatch(editProfile(editData));
    }
  };
};

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

export default SignupContainer;
