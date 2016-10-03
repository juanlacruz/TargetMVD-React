import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import Config from 'Config';
import { logout } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer;
