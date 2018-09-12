import React, { Component } from 'react';

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
    const {username, email, password, cuisine} = e.target 
    console.log('IN HANDLE SUBMIT', username.value, email.value, password.value, cuisine.value);
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
      console.log('FETCH FIRST THEN');
      console.log(res);
    }).then(res => {
      console.log('FETCH SECOND THEN');
      // if (res.status === 200) {
      //   history.push('/download');
      // }
    });
  }

  render() {
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
            {/* <option value="english">English</option>
            <option value="nepalese">Nepalese</option>
            <option value="laotian">Laotian</option> */}
        </select>
        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
        </form>  
      </div>
    )
  }
}


export default SignUp;