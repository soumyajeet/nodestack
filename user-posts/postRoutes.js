const express = require('express');
const postsModel = require('./postsModel');
const app = express();
const bodyParser= require('body-parser');
var MongoClient = require('mongodb').MongoClient


app.get('/allpostworks', async (req, res) => {
  
  try {
    var works = await postsModel.find();
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Content-Type", "application/x-www-form-urlencoded");
    res.send(works);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/userworksposts/:username', async (req, res) => {
    console.log(req.params.username);
  
  try {
    var data = await postsModel.find({"username":req.params.username});
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Content-Type", "application/x-www-form-urlencoded");
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = app