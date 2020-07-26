const express = require('express');
const userModel = require('../models/userModel');
const app = express();

app.get('/userinfo', async (req, res) => {
  const users = await userModel.find({
  });

  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/adduserinfo', async (req, res) => {
    const userinfo = new userModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address: req.body.address,
      mobile: req.body.mobile,
      pincode: req.body.pincode,
      emailid: req.body.emailid
    });
  
    try {
      await userinfo.save();
      res.send(userinfo);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.delete('/userdelete/:id', async (req, res) => {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id)
  
      if (!user) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
});

app.patch('/userupdate/:firstname', async (req, res) => {
    try {
      await userModel.findByIdAndUpdate({
        firstname: req.params.firstname,
        lastname: req.body.lastname, 
        address: req.body.address,
        mobile: req.body.mobile,
        pincode: req.body.pincode,
        emailid: req.body.emailid
      })
      await userModel.save()
      res.send(users)
    } catch (err) {
      res.status(500).send(err)
    }
});

module.exports = app