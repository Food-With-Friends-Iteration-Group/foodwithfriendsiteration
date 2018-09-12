const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const http = require("http");
const socketIo = require("socket.io");

const app = express();
const PORT = 3000;

const userController = require("./controllers/userController"); //akouvi working on this has the set get find methods
const cuisineController = require("./controllers/cuisineController"); //gets all the info for users with that specific cuisine as a favorite
const userCuisineController = require("./controllers/userCuisineController");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/*", express.static(__dirname));

app.get("/login", userController.getUser);

// app.get("/admin", userController.getAllUsers);

app.post("/sign-up", userController.addUser);

app.post(
  "/login",
  // userController.verifyUser,
  // cuisineController.getID,
  // userCuisineController.add,
  (req, res) => {
    res.redirect("/dashboard");
  }
);

app.get("/dashboard", userController.getAll);

app.get("/sign-up", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/sign-up.html"));
});

const server = http.createServer(app);
const io = socketIo(server);

let nsp = io.of("/loginA");
nsp.on("connection", socket => {
  console.log("we are on a namespace");
});
nsp.emit("hi", "hi people");

io.on("connection", socket => {
  socket.on("chat message", function(msg) {
    socket.broadcast.emit("broadcast", msg);
  });
  socket.on("disconnect", () => console.log("disconnected in server"));
});
server.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = app;
