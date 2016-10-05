import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Home from '../components/Home/Home';
import Config from 'Config';
import { logout } from '../actions/logoutActions';

const mapStateToProps = (state, ownProps) => {
  return {

  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
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
