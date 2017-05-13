import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="mainSplash">
        <div className="splashOptions">
          <h1>Please Login to Continue!</h1>
          <form>
            <input type="text"/>
            <input type="text"/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
