const mongoose = require("mongoose");

const User = new mongoose.Schema({
  loginName: String,
  password: String,
  favoriteCuisine: ""
});

module.exports = mongoose.model("User", User);
