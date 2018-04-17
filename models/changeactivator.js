const mongoose = require('mongoose');

const changeActivatorSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  employer: {
    type: String,
    required: false
  },
  stance: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  twitter: {
    type: String,
    required: false
  },
  phone: {
    type: Number,
    required: false
  },
  website: {
    type: String,
    required: false
  },
  author: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ChangeActivator', changeActivatorSchema);