// Require Dependencies
const LocalStrategy = require('passport-local').Strategy;
const randomstring = require('randomstring');
const mailer = require('../controllers/mailController');
const User = require('../models/users');

// Expose this function to our app using module.exports
module.exports = function (passport) {

  // Set up passport sessions
  
  // Serialize User
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // Deserialize User
  passport.deserializeUser(function (id, done) {
    User.findById(id).then((user) => {
      done(null, user);
    });
  });

  // Establish local Signup

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqtoCallback: true
  },
    function (req, username, password, done) {

      // See if the user trying to login already exists
      User.findOne({ 'local.username': username }, function (err, user) {
          
        // If there are any errors, return error
        if (err)
          return done(err);
          
        // Check to see if a user with that email already exists
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That username is already in use.'));
        } else {
          // If no user exists, create new user 
          let newUser = new User();

          // Set new user credentials
          newUser.local.username = username;
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.verificationToken = randomstring.generate(16);

          // Save the user
          newUser.save(function (err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
      });
    }));
  
  // Establish local login
  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
    function (req, username, password, done) {

      // See if user exists
      User.findOne({ 'local.username': username }, function (err, user) {

        // If errors, return errors
        if (err)
          return done(err);

        // Is no user is found, return message
        if (!user)
          return done(null, false, req.flash('loginMessage', 'That username does not exist'));

        // If user is found but password is wrong
        if (!user.validPassword(password))
          return done(null, false, req.flash('loginMessage', 'Incorrect password'));

        return done(null, user);
      });
    }));
};