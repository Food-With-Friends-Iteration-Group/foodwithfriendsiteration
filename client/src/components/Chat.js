import { connect } from "react-redux";
import React, { Component } from "react";
import { subscribeToMessages, socket } from "./Api";

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
    this.enterPressed = this.enterPressed.bind(this);
  }
  componentDidMount() {
    subscribeToMessages(message => {
      this.setState({
        messages: [...this.state.messages, message]
      });
    });
  }

  handleOnChange(e) {
    e.preventDefault();
    this.setState({ message: e.target.value });
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

  enterPressed(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      this.handleOnClick(e);
      e.target.value = "";
    }
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
            value={this.state.message}
            className="msg-inbox"
            id="m"
            autoComplete="off"
            onChange={e => this.handleOnChange(e)}
            onKeyDown={e => this.enterPressed(e)}
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
