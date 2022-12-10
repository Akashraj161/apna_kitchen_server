const mongoose = require("mongoose");

const foodDetailsSchema = new mongoose.Schema({
  foodName: {
    type: String,
  },
  description:{
    type:String,
  },
  priceWeekly:{
    type:Number,
  },
  priceMonthly:{
    type:Number,
  },
  image:{
    type:String,
    default: "https://www.pngitem.com/pimgs/m/43-435808_cuisine-area-food-plate-of-food-cartoon-hd.png"
  },
  address: {
    type: String,
  },
  restaurantName: {
    type: String
  },
  phoneNo:{
    type: Number
  },
  created:{
    type: Date,
    default:Date.now
  }
});


const newFoodDetail = new mongoose.model("newFoodDetail",foodDetailsSchema);
module.exports = newFoodDetail;
