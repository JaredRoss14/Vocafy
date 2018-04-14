const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  local:
    {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    verificationToken: {
      type: String,
      required: false
    },
    verified: {
      type: Boolean,
      required: false
    }
  }
});

module.exports = mongoose.model('User', userSchema);