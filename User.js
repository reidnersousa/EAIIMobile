// User.js




const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    nickname: String,
    email: String,
    password: String
  }
);

module.exports = mongoose.model('User', UserSchema);



