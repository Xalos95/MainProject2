const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({

  name: { type:String, required: true},
  pic: String,
  country: { type:String, required: true},
  city: { type:String, required: true},
  price: Number,
  departure: Number,
  time: Number
})

module.exports = mongoose.model('Place', placeSchema)
