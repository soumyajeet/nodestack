const express = require('express');
const bannersApp = express();
var cors = require('cors');
const bannerModel = require('./bannerModels');



bannersApp.get('/allbanners', async (req, res) => {
        
  const banners = await bannerModel.find({
      "status": "live"
  });

  try {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(201).send(banners);
  } catch (err) {
    res.status(500).send(err);
  }
});




module.exports = bannersApp;