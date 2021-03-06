import React from 'react';
import { Router, Route, browserHistory, Link, Miss } from 'react-router';

class Welcome extends React.Component {
  render() {
    return (
      <div className="mainSplash">
        <div className="splashOptions">
          <h1>Welcome to YourOrder!</h1>
          <h3>Choose an option to get started</h3>

          <div className="splashButton">
            <a href="<Supplier /">Supplier</a>
            <a href="">Client</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome;
