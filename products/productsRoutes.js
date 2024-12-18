const express = require('express');
const productsApp = express();
const cors = require('cors');
const productsModel = require('./productsModel');
productsApp.use(
  cors({
    origin: '*'
  })
)


productsApp.get('/productsinfo/:category', async (req, res) => {
        
  const products = await productsModel
  .find({
    'productCategory' : req.params.category,
    'status': 'active'
  })
  .sort({createdDate: -1})

  try {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});


productsApp.get('/productsinfo', async (req, res) => {
        
  const products = await productsModel.find({
  });

  try {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});


productsApp.get('/productdetails/:toolid', async (req, res) => {
        
  const products = await productsModel.find({
	  'toolId' : req.params.toolid
  });

  try {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});




module.exports = productsApp