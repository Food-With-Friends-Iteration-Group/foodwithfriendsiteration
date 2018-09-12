const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");

const cookieParser = require('cookie-parser');
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());

const userController = require("./controllers/userController");
const cuisineController = require("./controllers/cuisineController");
// const userCuisineController = require("./controllers/userCuisineController");

// Socket connection
const io = socketIo(server);

io.on("connection", socket => {
  socket.on("chat message", function(msg) {
    socket.broadcast.emit("broadcast", msg);
  });
  socket.on("disconnect", () => console.log("disconnected in server"));
});


// Database connection
const mongoose = require("mongoose");

mongoose.connect('mongodb://christine_c:shapeups3@ds151382.mlab.com:51382/fwfiteration');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


// Routes
app.get("/*", express.static(__dirname));
app.get("/sign-up", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/sign-up.html"));
});
app.get("/login", userController.getUser);
app.get("/dashboard", userController.getAll);
// app.get("/admin", userController.getAllUsers);
app.post("/sign-up", userController.addUser);
app.post(
  "/login",
  (req, res) => {
    res.redirect("/dashboard");
  }
);

server.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
