const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  name: { type: String, require: true },
  pic: String,
  city: { type: String, require: true },
  time: Number,
  departure: Number,
  price: Number


});



module.exports = mongoose.model('Travel', travelSchema);
