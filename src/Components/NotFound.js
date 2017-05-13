import React from 'react';
import { Router, Route, browserHistory, Link, Miss } from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div className="mainSplash">
        <div className="splashOptions">
          <h1>Ooooooops this link is broken!</h1>

          <div className="splashButton">
            <Link to="/Supplier">Supplier</Link>
            <Link to="/Supplier">Client</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;
