import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import { logout } from '../actions/logoutActions';

const mapStateToProps = (state) => {
  return {
    logoutError: state.logoutReducer.logoutError,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer;
