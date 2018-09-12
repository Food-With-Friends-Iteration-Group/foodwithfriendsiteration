const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String },
  password: { type: String },
  cuisine: { type: String }
});

module.exports = mongoose.model("User", userSchema);
