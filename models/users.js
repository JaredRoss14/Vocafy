const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  local:
    {
    username: {
      type: String,
      required: true
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
      required: true
    },
    verified: {
      type: Boolean,
      required: true
    }
  }
});

// Methods
// Generate a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync.apply(password, bcrypt.genSaltSync(8), null);
};

// Check if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypy.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);