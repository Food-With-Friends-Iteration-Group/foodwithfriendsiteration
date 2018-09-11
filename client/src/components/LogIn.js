import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';
import * as types from '../actions/actions';
import { Redirect } from 'react-router-dom';

const mapDispatchToProps = store => ({ friends: store.friends });
const mapStateToProps = store => ({ CurrentUser: store.friends });

class LogIn extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      // redirect: false,
      food: ''
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const value = event.target.value;
    const name = event.target.name;

    // set state
    if (name === "user") {
      store.dispatch(types.currentUser(value));
    } else if (name === "pw") {
      store.dispatch(types.currentPW(value));
    }
  }

  submitHandler(event) {
    event.preventDefault()
    if (!event.target.checkValidity()) return;
    const { user, pw, cuisine } = this.props.CurrentUser;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({ email: user, password_digest: pw, type: cuisine }),
      }).then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        } else {
          store.dispatch(types.toggleLogIn());
          // this.setState({
          //   redirect: !this.state.redirect,
          //   food: 'italian'
          // })

        }
    })
  }

  render() {
    const { cuisine } = this.props.CurrentUser
    const { redirect } = this.props.CurrentUser;
    if (redirect) return <Redirect to={`/chat/${cuisine}`} />
    return (
      <div className="main-login-container">
        <div className="login-box">
          <form className="flex-form" onSubmit={this.submitHandler} noValidate>
            <label>
              Email:
              <input
                name="user"
                type="text"
                value={this.props.CurrentUser.user}
                onChange={this.changeHandler}
                placeholder="email"
                required
              />
            </label>
            <label>
            Password: 
              <input 
              name="pw" 
              type="password"
              value={this.props.CurrentUser.pw}
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
              type="submit"
              value="submit"
            >
              Log In
            </button>
          </form>
          <div className="button bg-blue">
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(LogIn);
