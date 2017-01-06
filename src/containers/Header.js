import { connect } from 'react-redux';
import Header from '../components/common/Header';
import { toggleShow } from '../actions/SideNavBarActions';

const mapStateToProps = (state) => {
  return {
    showItem: state.sideNavBarReducer.showItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowItem: (value) => {
      dispatch(toggleShow(value))
    }
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
