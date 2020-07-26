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
  }
});

const User = mongoose.model("UserInfo", UserSchema, 'userinfo');
module.exports = User;