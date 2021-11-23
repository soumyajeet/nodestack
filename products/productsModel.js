const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    toolId: String,
    productName : String,
    productBaseName : String,
    productCategory : String,
    productSubCategory : String,
    productShortDesc : String,
    productLongDesc : String,
    features: [String],
    productAffiliateUrl : String,
    productImgUrl : String,
    rating: Number,
    userReviews: []
});

const Products = mongoose.model("ProductsInfo", ProductsSchema, "allproducts");
module.exports = Products;