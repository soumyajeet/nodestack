const express = require('express');
const { body, validationResult } = require('express-validator');
const reviewsModel = require('../products/productsModel');
const reviewsapp = express();
var cors = require('cors');

reviewsapp.use(express.json());
reviewsapp.use(cors())

//69020

reviewsapp.post('/postreviews', async (req, res) => {

    console.log(req.body);


    reviewsModel.findOne({ toolId: req.body.toolid })
    .then(data=>{
        console.log(data._id);
        reviewsModel.updateOne({ _id:data._id },
            {
                $push:{
                    userReviews: {
                        username: req.body.user,
                        reviews: req.body.reviews,
                        ratings: req.body.rating,
                        reviewStatus: false  
                    }
                    
                }
            })
            .then((elem)=>{
                console.log(elem);
                res.status(200).send({'msg': 'review posted successfully'})
            })
            .catch(err=>res.status(200).send({'msg':'error in update'}))
    })
    .catch(err=>console.log(err));

});



module.exports = reviewsapp