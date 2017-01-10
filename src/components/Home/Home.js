import React, { Component, PropTypes } from 'react';
import '../../styles/Home.scss';
import GoogleMap from './GoogleMapContainer';
import SideNavBar from '../../containers/SideNavBar';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <div className="leftpanel-container"><SideNavBar/></div>
        <GoogleMap/>
      </div>
    );
  }
}

Home.propTypes = {
  logout: PropTypes.func.isRequired,
  logoutError: PropTypes.string,
};

export default Home;
