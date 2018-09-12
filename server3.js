const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const http = require('http');

const cookieParser = require('cookie-parser');
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const userController = require("./controllers/userController");

const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());

// Database connection
mongoose.connect('mongodb://christine_c:shapeups3@ds151382.mlab.com:51382/fwfiteration');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// Routes
app.get("/*", express.static(__dirname));
app.get("/login", userController.getUser);
app.get("/dashboard", userController.getAll);
app.post("/sign-up", userController.addUser);
app.post(
  "/login",
  (req, res) => {
    res.redirect("/dashboard");
  }
  );
// Socket connection
const io = socketIo(server);

const ital = io.of('/italian');
ital.on('connection', socket => {
  console.log('socket.io/italian')
  socket.on('chat message', message => {
    console.log(message);
    socket.broadcast.emit('broadcast', message)
  });
});

// io.on("connection", socket => {
//   console.log('global')
//   socket.on("chat message", function(msg) {
//     socket.broadcast.emit("broadcast", msg);
//   });
//   socket.on("disconnect", () => console.log("disconnected in server"));
// });



server.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
