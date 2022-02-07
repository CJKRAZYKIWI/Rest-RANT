const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true },
  pic: {type: String, default: 'https://www.canva.com/design/DAE3e63cP_g/1TGSXoFQuaXdvJD_o5YLug/view?utm_content=DAE3e63cP_g&utm_campaign=designshare&utm_medium=link&utm_source=shareyourdesignpanel'  },
  cuisines: {type: String, required: true },
  Location: {type: String, required: true },
  founded: {type: Number, min:[1673,'That year is unbelievable... please put year founded as 1673'],max:[new Date().getFullYear(), 'Hey this year did not come up yet']},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]

})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.Location} since ${this.founded}.`
}
module.exports = mongoose.model('Place', placeSchema)