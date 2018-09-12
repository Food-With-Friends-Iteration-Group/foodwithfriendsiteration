const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  cuisine: { type: String }
});

module.exports = mongoose.model("User", User);
