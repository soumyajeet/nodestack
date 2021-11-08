const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  emailid : {
    type: String,
    trim: true
  },
  username: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: false
  },
  fullname: {
    type: String,
    trim: true
  },
  firstname: {
    type: String,
    trim: true
  },
  lastname: {
    type: String,
    trim: true
  },
  mobile: {
    type: Number,
    trim: true
  },
  profilepic: {
    type: String,
    trim: true
  }
});

const User = mongoose.model("UserInfo", UserSchema, 'userinfo');
module.exports = User;