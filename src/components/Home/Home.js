import React, { Component, PropTypes } from 'react';
import '../../styles/Home.scss';
import GoogleMap from './GoogleMapContainer';
import LeftPanel from '../../containers/LeftPanel';


class Home extends Component {
  render() {
    const { logout, logoutError } = this.props;
    return (
      <div className="app">
        <div className="leftpanel-container"><LeftPanel/></div>
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
