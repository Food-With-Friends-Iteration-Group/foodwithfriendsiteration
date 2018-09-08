import { connect } from 'react-redux';
import React, { Component } from 'react';
import socketIOClient from "socket.io-client";


let endpoint = "http://localhost:3000";

const mapStateToProps = store => ({
  findFriends: store.friends
})

const socket = socketIOClient(endpoint);

socket.on('broadcast', function(msg) {
  $('#messages').append($('<li class="user2"><span>User2</span>').text('User2: ' + msg));
})
function sendMsg() {
  socket.emit('chat message', $('#m').val());
  // let div = document.createElement('div');
  // console.log(div)
  // div.className = 'user1Class';
  // div.innerHTML = 'user1';
  let val = $('#m').val();
  console.log(val)
  $('#messages').append($('<li class="user1" id='+ val +'>'));
  $('#'+val).append($('<div>').text('User1'));
  $('#m').val('');
  return false;
};

class ChatBox extends Component {
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