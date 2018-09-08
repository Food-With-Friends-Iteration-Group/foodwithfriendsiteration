import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from './store';
import {connect} from 'react-redux';
import * as types from './reducers/actions';

const mapDispatchToProps = (store) => ({friends: store.friends});
const mapStateToProps = (store) => ({CurrentUser: store.friends});

// store.dispatch(types.currentUser(username, password));

class App extends Component {
  constructor(props) {
    super(props);

    console.log("props", props.CurrentUser.pw);
    
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const value = event.target.value;
    const name = event.target.name;

    // set state
    store.dispatch(types.currentUser("user", "password");
  }

  submitHandler(event) {
    event.preventDefault()
    console.log("submitting");

    if (!event.target.checkValidity()) {
      // form is invalid
      alert("Please complete the whole form.")
    }
  }


  render() {
    return (
      <div className="main-login-container">
        <div className="login-box">
          <form className="flex-form" onSubmit = {this.submitHandler} noValidate>
            <label>
            Email: 
              <input 
              name="user"
              type="text" 
              value= "email" 
              onChange={this.changeHandler} 
              placeholder="email" 
              required/>
            </label>
            <label>
            Password: 
              <input 
              name="pw" 
              type="password"
              value= "password state"
              onChange={this.changeHandler}
              required/>
            </label>
            <button 
            className="button form-button bg-green" 
            type='submit' 
            value='submit'>Log In</button>
          </form>
          <div className="button bg-blue"><Link to='/sign-up'>Sign Up</Link></div>
        </div>
      </div>
    )
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
  )(App);