const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  createdDate: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    required: false,
  },
  campaignName: {
    type: String,
    required: true
  },
  campaignUrl: {
    type: String,
    required: false
  },
  summary: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  changeActivators: 
    [{
      type: mongoose.Schema.ObjectId,
      ref: 'ChangeActivator'
    }],
  socialMedia: {
    twitterUrl: {
      type: String,
      required: false
    },
    facebookUrl: {
      type: String,
      required: false
    },
    instagramUrl: {
      type: String,
      required: false
    },
  },
  campaignTweets: {
    supports: {
      type: String,
      required: false
    },
    opposes: {
      type: String,
      required: false
    },
    undecided: {
      type: String,
      required: false
    },
    unknown: {
      type: String,
      required: false
    },
  },
  campaignEmails: {
    supports: {
      type: String,
      required: false
    },
    opposes: {
      type: String,
      required: false
    },
    undecided: {
      type: String,
      required: false
    },
    unknown: {
      type: String,
      required: false
    },
  }

});

module.exports = mongoose.model('Campaign', campaignSchema);