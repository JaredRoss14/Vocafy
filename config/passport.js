const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

const db = require('../models');

module.exports = function (passport) {
  
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    db.user.findOne({
      where: { id: id }
    }).then(data => {
      done(null, data.dataValues);
    }).catch(error => {
      done(error, null);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqtoCallback: true
  },
    function (req, email, password, done) {
      // See if user already exists in database
      db.users.findOne({ where: { username: username } }).then(data => {
        if (data) {
          // Username exists in database
          req.flash('usermame', req.body.username);
          

        }
      })



      process.nextTick(function () {
        User.findOne({ 'local.email': email }, function (err, user) {
          if (err)
            return done(err);
          if (user) {
            return done(null, false, req.flash('signupMessage', 'That email already taken'));
          } else {
            const newUser = new User();
            newUser.local.email = email;
            newUser.local.password = password;

            newUser.save(function (err) {
              if (err)
                throw err;
              return done(null, newUser);
            });
          }
      })
    })
  }  

  ))
}