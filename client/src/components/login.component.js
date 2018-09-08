import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="main-login-container">
        <div className="login-box">
          <form className="flex-form" method='POST' action='/sign-up'>
            Email: <input name="username" type="text" placeholder="email" />
            Password: <input name="password" type="password" />
            <button className="button form-button bg-green" type='submit' value='Log in'>Log In</button>
          </form>
          <div className="button bg-blue"><Link to='/sign-up'>Sign Up</Link></div>
        </div>
      </div>
    )
  }
}

export default App;