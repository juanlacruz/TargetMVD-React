import React, { PropTypes, Component } from 'react';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app-container">
        { /* Header component goes here*/ }
        {children}
        { /* Footer component goes here*/ }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
