const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
   title:{type:String,required:true},
   image:{type:String,required:true},
   description:{type:String,required:true},
   price:{type:String,required:true}
}
)

const hotel = mongoose.model('Hotel', hotelSchema);

module.exports = hotel