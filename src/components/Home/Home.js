import React, { Component, PropTypes } from 'react';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="button" onClick={this.props.logout} value="Log Out" />
        {
          this.props.logoutError ?
          <span>{this.props.logoutError}</span> :
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
