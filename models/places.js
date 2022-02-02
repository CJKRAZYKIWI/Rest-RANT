const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true },
  pic: String,
  cuisines: {type: String, required: true },
  Location: {type: String, required: true },
  founded: Number,
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}
module.exports = mongoose.model('Place', placeSchema)