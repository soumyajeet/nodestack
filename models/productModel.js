const mongoose = require('mongoose');
const { Int32 } = require('mongodb');

const ProductSchema = new mongoose.Schema({
    category : {
        type: String,
        required: true,
        trim: true,
        lowercase: false
    },
    subcategory : {
        type: String,
        required: true,
        trim: true,
        lowercase: false
    },
    material : {
        type: String,
        trim: true,
        lowercase: false,
        required: false,
    },
    thumbnail : {
        type: String,
        trim: true,
        lowercase: false,
        required: false,
    },
    title : {
        type: String,
        trim: true,
        lowercase: false,
        required: true,
    },
    description : {
        type: String,
        trim: true,
        lowercase: false,
        required: true,
    },
    style: {
        type: String,
        trim: true,
        lowercase: false,
        required: true,
    },
    code: {
        type: String,
        trim: true,
        lowercase: false,
        required: true,
    },
    price: {
        type: String,
        trim: true,
        required: true,
    }
});

const Products = mongoose.model("ProductInfo", ProductSchema, 'productinfo');
module.exports = Products;