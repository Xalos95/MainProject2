const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

module.exports.Place = require('./travel')

console.log(module.exports)