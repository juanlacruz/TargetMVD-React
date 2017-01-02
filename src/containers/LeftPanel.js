import { connect } from 'react-redux';
import LeftPanel from '../components/Home/LeftPanel';
import { toggleEditProfile } from '../actions/leftPanelActions';

const mapStateToProps = (state) => {
  return {
    showEditProfile: state.leftPanelReducer.showEditProfile,
    user: state.loginReducer.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditProfile: () => {
      dispatch(toggleEditProfile());
    }
  };
};

const LeftPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftPanel);

export default LeftPanelContainer;
