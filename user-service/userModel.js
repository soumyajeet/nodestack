const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname : {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },
  lastname : {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },
  address : {
    type: String,
    trim: true,
    lowercase: false
  },
  mobile : {
    type: String,
    trim: true,
    lowercase: false
  },
  pincode : {
    type: String
  },
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
  userpic: {
    type: String,
    trim: false
  },
  userbio: {
    type: String,
    trim: true
  },
  usertype: {
    type: String,
    trim: true
  },
  experience: {
    type: String,
    trim: true
  }
});

const User = mongoose.model("UserInfo", UserSchema, 'userinfo');
module.exports = User;