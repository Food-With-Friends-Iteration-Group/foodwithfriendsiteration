const express = require('express');
const path = require('path');

const http = require('http');
const socketIo = require('socket.io');

const app = express();
const PORT = 3000;

app.get('/*', express.static(__dirname));

app.post('/login', (req, res) => {
  // send to db

  // set cookie

  // set session
  res.send("Logged In");
});

app.get('/sign-up', (req,res) => {
  res.sendFile(path.join(__dirname + '/views/sign-up.html'));
})

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
  console.log('connection in server'),
  socket.on('chat message', function(msg) {
    console.log(('message ' + msg))
  })
  socket.on('disconnect', () => console.log('disconnected in server'))
})

server.listen(PORT, () => console.log(`listening on ${PORT}`))

// app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
