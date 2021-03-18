const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema({
  // user: {},
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  type: {
    type: String,
    default: "personal"
  },
}, {
    collection: 'contacts'
  })

module.exports = mongoose.model('Contact', contactSchema)