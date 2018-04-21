module.exports = (app, passport) => {

  // Log In
  app.post('/user/login', function (req, res, next) {

    passport.authenticate('local-login', function (err, user, info) {
      if (err) {
        return res.status(401);
      }
      if (!user) {
        return res.status(401); 
      }
      req.login(user, function (err) {
        if (err) {
          return res.status(401); 
        }
        else {
          return res.sendStatus(200);
        }

      });
    })(req, res, next);
  });

  // Log Out
  app.get('/user/logout', function (req, res) {
    console.log("trying to log out");
    req.session.destroy();
    res.redirect('/');
  });

  // Test if user is logged in
  app.get('/user/loggedIn', isLoggedIn, (req, res) => {
    res.send({ username: req.user.local.username });
  })

  // Sign Up
  app.post('/user/signup', 
    passport.authenticate('local-signup', {
      successRedirect: '/', // Redirect to home if successful
      failureRedirect: '/signup', // Redirect to signup page if there is an error
      failureFlash: true // Allow flash messages
    })

);

  // Resend Verification

  // Route middleware to makesure user is logged in 
  function isLoggedIn(req, res, next) {
    // If Authenticated, Continue
    if (req.isAuthenticated()) {
      console.log("Logged In!!");
      return next();
    } else {
      console.log("Not Logged In!!");
      // res.sendStatus(403, 'Not Logged In');
    }
  }
}