import { connect } from 'react-redux';
import Home from '../components/Home/Home';
//import {/* ... */} from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {

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
