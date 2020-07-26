const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const OPTS = { useNewUrlParser: true };
const bodyParser= require('body-parser');


DB_URI = "mongodb+srv://sam:sam@321@terracotta.u65dd.mongodb.net/sampledata";


const userRouter = require('./routes/userRoutes.js');
const productRouter = require('./routes/productRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json


mongoose.connect(DB_URI, OPTS, function(err, db) {
    if (err) { return console.error('failed');}
});

app.use('/getuserdetails', userRouter);
app.use('/getproductdetails', productRouter);

app.listen(3000, () => { 
    
    console.log('Server is running...') 
});