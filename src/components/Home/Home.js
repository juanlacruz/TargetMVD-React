import React, { Component, PropTypes } from 'react';

import './Home.css';

class Home extends Component {
  render() {
    const { logout, logoutError } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
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
}

export default Home;
