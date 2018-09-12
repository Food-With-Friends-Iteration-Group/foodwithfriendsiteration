import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import * as types from '../actions/actions';
import { Redirect } from 'react-router-dom';

const mapDispatchToProps = store => ({ friends: store.friends });
const mapStateToProps = store => ({ CurrentUser: store.friends });

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      cuisine: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const { username, email, password, cuisine } = e.target 
    fetch('/sign-up', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        cuisine: e.target.cuisine.value
      })
    }).then(res => {
      if (res.status >= 400) {
        throw new Error('something went wrong!')
      }
      return res.json()
    })
    .then(response => {
      const { username, cuisine } = response;
      store.dispatch(types.updateUsername(username));
      store.dispatch(types.updateCuisine(cuisine));
      store.dispatch(types.toggleLogIn());
    });
  }

  render() {
    const { cuisine } = this.props.CurrentUser
    const { redirect } = this.props.CurrentUser;
    if (redirect) return <Redirect to={`/chat/${cuisine}`} />
    return (
      <div className="sign-up-container">
        <form className="flex-form" onSubmit={this.handleSubmit} >
        <label> Username: </label>
        <input 
          type="text" 
          value={this.state.value} 
          name="username"
          onChange={this.handleChange} 
        />
        <label> Email: </label>
        <input 
          type="text" 
          value={this.state.value} 
          name="email"
          onChange={this.handleChange} 
        />
        <label> Password: </label>
        <input 
          type="text" 
          value={this.state.value} 
          name="password"
          onChange={this.handleChange} 
        />
        <label>Pick your favorite cuisine: </label>
        <select 
          name="cuisine" 
          value={this.state.value} 
          onChange={this.handleChange}>
            <option value="italian">Italian</option>
            <option value="french">French</option>
            <option value="mexican">Mexican</option>
        </select>
        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
        </form>  
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);