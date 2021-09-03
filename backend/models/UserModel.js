const mongoose = require("../db/connection");

const UserSchema = new mongoose.Schema({
  userName: String,
  privLevel: Number,
  lastLogin: { type: Date, default: Date.now },
  email: String,
  profilePic: String,
  password: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;