const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const OPTS = { useNewUrlParser: true };

DB_URI = "mongodb+srv://sahmen:S0umyaji1@nodestack.vlfcv.mongodb.net/smart_tech_gigs";



mongoose.connect(DB_URI, OPTS, function(err, db) {
    if (err) { 
        return console.error('failed',err);
    }
});


const productsRouter = require('./products/productsRoutes.js');
const loginRouter = require('./users/userRoutes.js');
const bannerRouter = require('./banners/bannerRoutes.js');
const reviewsRouter = require('./reviews/reviewRoutes.js');

router.use(productsRouter);
router.use(loginRouter);
router.use(bannerRouter);
router.use(reviewsRouter);

module.exports = router;