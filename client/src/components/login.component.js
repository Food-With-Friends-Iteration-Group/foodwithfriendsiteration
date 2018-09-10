import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from './store';
import {connect} from 'react-redux';
import * as types from './reducers/actions';
import {Route, Redirect} from 'react-redux';

const mapDispatchToProps = (store) => ({friends: store.friends});
const mapStateToProps = (store) => ({CurrentUser: store.friends});

// store.dispatch(types.currentUser(username, password));

class App extends Component {
  constructor(props) {
    super(props);    
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const value = event.target.value;
    const name = event.target.name;

    // set state
    if (name === 'user') {
      store.dispatch(types.currentUser(value));
    } else if (name === 'pw') {
      store.dispatch(types.currentPW(value));
    }
    console.log("props", this.props);
  }

  submitHandler(event) {
    event.preventDefault()
    console.log("submitting");

    if (!event.target.checkValidity()) {
      // form is invalid
      alert("Please complete the whole form.")
    } else {
      const user = this.props.CurrentUser.user;
      const pw = this.props.CurrentUser.pw;
      const cuisine = this.props.CurrentUser.cuisine;

    fetch('/login', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email: user, password_digest: pw, type: cuisine}),
      }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log("Returned data: ", data);   
        if(data){
            ;
        }
    }).catch(function(err) {
        console.log("Returned error: ", err)
    });
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
              value={this.props.CurrentUser.user} 
              onChange={this.changeHandler}
              placeholder="email" 
              required/>
            </label>
            <label>
            Password: 
              <input 
              name="pw" 
              type="password"
              value= {this.props.CurrentUser.pw}
              onChange={this.changeHandler}
              required/>
            </label>
            <label>
            Cuisine:
              <select>
                <option value="Italian">Italian</option>
                <option value="French">French</option>
              </select>
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