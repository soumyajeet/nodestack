const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
  username : String,
  imageposts: [
    {
      imageuri: String
    },{
      imageid: String
    }  
  ]
});

const Userworks = mongoose.model("UserWorks", PostsSchema, 'userworks');
module.exports = Userworks;