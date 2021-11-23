const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const userModel = require('./userModel');
const userapp = express();
var cors = require('cors');
var nodemailer = require("nodemailer");

const passport = require('passport');
const jwt = require('jsonwebtoken');


var smtpTransport = nodemailer.createTransport({
  host: "mail.digismartautomate.com",
  port: 465,
  secure: false,
  auth: {
    user: "support@digismartautomate.com",
    pass: "S0umyaji1@"
  },
  tls:{
    rejectUnauthorized:false
  },
});

userapp.use(express.json());
userapp.use(cors())

userapp.get('/send', async (req, res)=>{
  var mailOptions = {
    to: "sendtosoumyajit@gmail.com",
    subject: "Registration Successful For Mega Digital Mart",
    text: `Hello Stranger, Welcome to Mega Digital Mart.`
  }

  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end("error");
    } else {
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
  })

});

userapp.get('/userinfo', async (req, res) => {
  const users = await userModel.find({
  });
  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});


userapp.post('/userprofile', async (req, res) => {
  const users = await userModel.findOne({
    emailid: req.body.emailid
  });
  if (users) {
    res.status(200).json({ data: users, msg: "User found." });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});


userapp.post('/login', async (req, res, next) => {
  const user = await userModel.findOne({ emailid: req.body.email });
  if (user) {
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (validPassword) {
      res.status(200).json({ email: req.body.email, msg: "Login Successful" });
    } else {
      res.status(400).json({ email: req.body.email, error: "Invalid Password" });
    }
  } else {
    res.status(404).json({ email: req.body.email, error: "User does not exist" });
  }
});


userapp.post('/registration',
  async (req, res) => {
    const errorsAfterValidation = validationResult(req);
    if (!errorsAfterValidation.isEmpty()) {
      return res.status(400).json({
        code: 400,
        errors: errorsAfterValidation.mapped(),
      });
    } else {
      const salt = await bcrypt.genSalt();
      const userinfo = new userModel({
        emailid: req.body.email,
        username: req.body.email,
        fullname: req.body.firstname + " " + req.body.lastname,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        profilepic: req.body.profilePicURL
      });
      userinfo.password = await bcrypt.hash(req.body.password, salt);
      userModel.findOne({ emailid: req.body.email })
        .then(user => {
          if (!user) {
            userinfo.save()
              .then(() => res.status(201).send({ 'msg': 'User Registration Successful' })
              )
              .catch((err) => console.log(err))

            var mailOptions = {
              to: req.body.email,
              subject: "Registration Successful For Mega Digital Mart",
              text: `Hello ${userinfo.fullname}, Welcome to Mega Digital Mart.`
            }

            console.log(mailOptions);
            smtpTransport.sendMail(mailOptions, function (error, response) {
              if (error) {
                console.log(error);
                res.end("error");
              } else {
                console.log("Message sent: " + response.message);
                res.end("sent");
              }
            })

          } else {
            return res.status(400).send({ 'msg': 'User Already Exists' });
          }
        });
    }
  });



userapp.put('/userupdate/:email', async (req, res) => {

  const salt = await bcrypt.genSalt();
  const userinfo = new userModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mobile: req.body.mobile
  });

  userinfo.password = await bcrypt.hash(req.body.password, salt)

  userModel.updateOne({ emailid: req.params.email }, userinfo)
    .then(elem => {
      console.log(elem.username);
    })
    .catch((err) => console.log(err));
});



userapp.delete('/userdelete/:id', async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id)
    if (!user) res.status(404).send("No item found")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
});


module.exports = userapp