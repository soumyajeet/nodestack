const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    imageUrl: String,
    imageName:String,
    imageId:String,
    affiliateUrl:String
});

const Banners = mongoose.model("BannersInfo", BannerSchema, "banner_data");
module.exports = Banners;