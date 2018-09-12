import { connect } from "react-redux";
import React, { Component } from "react";
import { subscribeToMessages, socket } from "./Api";

//bringing in all the friends from the store
const mapStateToProps = store => ({
  user: store.friends.user
});

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: []
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  componentDidMount() {
    subscribeToMessages(message => {
      this.setState({
        messages: [...this.state.messages, message]
      });
    });
  }

  handleOnChange(event) {
    this.setState({ message: event.target.value });
  }

  handleOnClick() {
    const { message } = this.state;
    const { user } = this.props;
    const newMessage = { user, message };
    this.setState(
      {
        message: "",
        messages: [...this.state.messages, newMessage]
      },
      () => {
        socket.emit("chat message", newMessage);
      }
    );
  }

  render() {
    const messages = this.state.messages.map((msg, i) => (
      <li key={i}>
        {msg.user.toUpperCase()}: {msg.message}
      </li>
    ));
    return (
      <div>
        <ul className="msg-box" id="messages">
          {messages}
        </ul>
        <form className="msg-box-form" action="">
          <input
            className="msg-inbox"
            id="m"
            autoComplete="off"
            onChange={event => this.handleOnChange(event)}
          />
          <button
            type="button"
            id="msg-btn-enter"
            onClick={() => this.handleOnClick()}
            className="button msg-btn bg-green"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Chat);
