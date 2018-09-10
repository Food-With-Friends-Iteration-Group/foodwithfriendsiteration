function sendMsg() {
  $('#msg-btn-enter').on('click', function(){
    console.log('hit button')
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
};

export default sendMsg;