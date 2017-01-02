import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import picture from '../../assets/user-picture.png'
import Signup from '../../containers/Signup'
import '../../styles/LeftPanel.scss';

class LeftPanel extends Component {
  render() {
    const { showEditProfile, toggleEditProfile, user } = this.props;

    const showProfile = (
      <div className="container">
        <h1 className="title">target</h1>
        <div className="circle box"><img className="img-center" src={picture}/></div>
        <h3>{user.name}</h3>
        <span><span className="link-to-edit" onClick={toggleEditProfile}>Edit</span> / Profile</span>
        <div className="line-separator small-line margin-top-target"></div>
      </div>
    );

    const editProfile = (
      <div>
        <Signup isEdit={showEditProfile}/>
        <span className="link-to-edit" onClick={toggleEditProfile}>Show Profile</span>
      </div>
    )

    return (
      showEditProfile ? editProfile : showProfile
    );
  }
}

LeftPanel.propTypes = {
  showEditProfile: PropTypes.bool.isRequired,
  toggleEditProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default LeftPanel;
