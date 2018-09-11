import { connect } from 'react-redux';
import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

const endpoint = "http://localhost:3000";

const mapStateToProps = store => ({
  findFriends: store.friends
})
const socket = socketIOClient(endpoint);

socket.on('broadcast', function(msg) {
  $('#messages').append($('<li class="user2" id='+ msg +'>'));
  $('#'+msg).append($('<div>').text(msg));
  $('#'+msg).append($('<span>').text('User2'));
})

function sendMsg() {
  socket.emit('chat message', $('#m').val());
  let val = $('#m').val();
  $('#messages').append($('<li class="user1" id='+ val +'>'));
  $('#'+val).append($('<span>').text('User1'));
  $('#'+val).append($('<div>').text(val));
  $('#m').val('');
  return false;
};

class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
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


export default connect(mapStateToProps)(Chat);