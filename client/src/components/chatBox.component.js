import { connect } from "react-redux";
import React, { Component } from "react";
import socketIOClient from "socket.io-client";

let endpoint = "http://localhost:3000";
//should this be /chat/cuisine
// let endpoint = "http://localhost:3000/chat/?";

//bringing in all the friends from the store
const mapStateToProps = store => ({
  findFriends: store.friends
});

//connecting socketIO to that endpoint
const socket = socketIOClient(endpoint);
socket.on("broadcast", function(msg) {
  //add an li to the ul and create an id on the li that is the message typed in
  $("#messages").append($('<li class="user2" id=' + msg + ">"));
  //append a div with a text to the li that you just created by getting it by its id(which is the message)
  $("#" + msg).append($("<div>").text(msg));
  //append a span wiht a text User2 to the li
  $("#" + msg).append($("<span>").text("User2"));
});
function sendMsg() {
  io.sockets.emit("hi", "everyone");
  // socket.emit("chat message", $("#m").val());
  //get the value of the input
  let val = $("#m").val();
  //append an li ot the ul with an id of the input value
  $("#messages").append($('<li class="user1" id=' + val + ">"));
  //
  $("#" + val).append($("<span>").text("User1"));
  $("#" + val).append($("<div>").text(val));
  $("#m").val("");
  return false;
}

class ChatBox extends Component {
  render() {
    return (
      <div>
        <ul className="msg-box" id="messages" />
        <form className="msg-box-form" action="">
          <input className="msg-inbox" id="m" autoComplete="off" />
          <button
            type="button"
            id="msg-btn-enter"
            onClick={sendMsg}
            className="button msg-btn bg-green"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ChatBox);
