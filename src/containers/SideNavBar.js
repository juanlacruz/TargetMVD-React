import { connect } from 'react-redux';
import SideNavBar from '../components/SideNavBar/SideNavBar';
import { toggleShow } from '../actions/SideNavBarActions';

const mapStateToProps = (state) => {
  return {
    showItem: state.sideNavBarReducer.showItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowItem: (value) => {
      dispatch(toggleShow(value));
    }
  };
};

const SideNavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNavBar);

export default SideNavBarContainer;
