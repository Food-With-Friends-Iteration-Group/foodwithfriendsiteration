import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div className="sign-up-container">
        <form className="flex-form" method='POST' action='/sign-up'>
          <div className="split-form">Email:<input type="text" /></div>
          <div className="split-form">Password:<input type="text" /></div>
          <div className="button bg-blue">Sign Up</div>
        </form>
      </div>
    )
  }
}

export default SignUp;