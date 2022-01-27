const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true },
  pic: String,
  cuisines: {type: String, required: true },
  Location: {type: String, required: true },
  founded: Number,
})

module.exports = mongoose.model('Place', placeSchema)