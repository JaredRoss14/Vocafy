// Require Dependencies
const LocalStrategy = require('passport-local').Strategy;
const randomstring = require('randomstring');
const mailer = require('../controllers/mailController');
const User = require('../models/users');
const bcrypt = require('bcrypt-nodejs');

// Expose this function to our app using module.exports
module.exports = function (passport) {

  // Set up passport sessions

  // Serialize User
  passport.serializeUser(function (user, done) {
    console.log('=========Serializing========');
    console.log(user.id);
    done(null, user.id);
  });

  // Deserialize User
  passport.deserializeUser(function (id, done) {
    console.log('=========DeSerializing========');
    console.log('id:' + id);
    User.findById(id, function (err, user) {
      console.log(user);
      done(err, user)
    });
  });

  // Establish local Signup

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, username, password, done) {
    

      // See if the user trying to login already exists
    User.findOne({ 'local.username': username }, function (err, user) {
        
          
        // If there are any errors, return error
        if (err) {
          console.log("Database Error: Looking for user" + err);
          return done(err);
        }
          
        // Check to see if a user with that name already exists
        if (user) {
          console.log("Account Error: Username taken");
          return done(null, false, req.flash('signupMessage', 'That username is already in use.'));

        } else {
          // If no user exists, create new user 
          let newUser = new User();

          // Set new user credentials
          newUser.local.username = username;
          newUser.local.email = req.body.email;
          newUser.local.password = bcrypt.hashSync(password, null, null);
          newUser.local.verificationToken = randomstring.generate(16);

          // Save the user
          newUser.save(function (err) {
            if (err) {
              console.log("")
              throw err;
            } else {
              mailer.sendVerificationEmail(newUser.local.email, newUser.local.username, newUser.local.verificationToken);
              return done(null, newUser);
            }

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

        console.log("userhere!:" + user);

        // If errors, return errors
        if (err) {
          console.log("Error in passport")
          return done(err);
        }

        // Is no user is found, return message
        if (!user) {
          console.log("Error in passport no user found")
          return done('Username was not found', false, null);
        }

        // If user is found but password is wrong
        if (!bcrypt.compareSync(password, user.local.password)) {
          console.log("wrong password from passport");
          return done('Invalid username/password', false, null);
        }
        console.log("It works!" + user.local.username);
        return done(null, user);
      }).catch(error => {
        return done(error);
      })
    }));
};