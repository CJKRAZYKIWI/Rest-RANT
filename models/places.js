const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true },
  pic: {type: String, default: 'http://placekitten/com/350/350'  },
  cuisines: {type: String, required: true },
  Location: {type: String, required: true },
  founded: {type: Number, min:[1673,'Thats old...put 1637'],max:[new Date().getFullYear(), 'Hey this year did not come up yet']},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]

})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.Location} since ${this.founded}.`
}
module.exports = mongoose.model('Place', placeSchema)