import React, { Component, PropTypes } from 'react';

import '../../styles/Home.scss';

class Home extends Component {
  render() {
    const { logout, logoutError } = this.props;
    return (
      <div className="app">
        <div className="app-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="button" onClick={logout} value="Log Out" />
        {
          logoutError ?
          <span>{logoutError}</span> :
          null
        }
      </div>
    );
  }
}

Home.propTypes = {
  logout: PropTypes.func.isRequired,
  logoutError: PropTypes.string,
};

export default Home;
