const express = require('express');
const productModel = require('../models/productModel');
const app = express();
const cors = require('cors');

app.get('/productinfo', cors(), async (req, res, next) => {
  const products = await productModel.find({
});

  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/oneproductinfo/:code', async (req, res) => {
  const product = await productModel.find({
    code: req.params.code
  });

  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app