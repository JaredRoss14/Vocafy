const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  contacts: {
    type: String,
    required: false
  },
  customURL: {
    type: String,
    required:false
  }
});

module.exports = mongoose.model('Campaign', campaignSchema);