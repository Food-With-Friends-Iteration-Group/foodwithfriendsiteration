import { connect } from 'react-redux';
import React, { Component } from 'react';
import socketIOClient from "socket.io-client";




const mapStateToProps = store => ({
  findFriends: store.friends
})
const socket = socketIOClient(endpoint);


function sendMsg() {
  console.log('hit button')
  socket.emit('chat message', $('#m').val());
  $('#m').val('');
  return false;
};

let endpoint = "http://localhost:3000";

class ChatBox extends Component {
  constructor() {
    super();
  }
  componentDidMount() {


  }
  render() {
    return (
      <div>
        <ul className="msg-box" id="messages"></ul>
        <form className="msg-box-form" action="">
          <input className="msg-inbox" id="m" autoComplete="off" /><button type="button" id="msg-btn-enter" onClick={sendMsg} className="button msg-btn bg-green">Send</button>
        </form>
      </div>
    );
  }
}


export default connect(mapStateToProps)(ChatBox);