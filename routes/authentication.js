module.exports = (app, passport) => {

  // Log In
  app.post('/user/login',
    passport.authenticate('local-login', {
    successRedirect: '/', // Redirect to home if successful
    failureRedirect: '/login', // Redirect to login if unsuccessful
    failureFlash : true // Allow flash messages
  }))

  // Log Out
  app.get('/user/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  // Sign Up
  app.post('/user/signup', function (req, res) {
    passport.authenticate('local-signup', {
      successRedirect: '/', // Redirect to home if successful
      failureRedirect: '/signup', // Redirect to signup page if there is an error
      failureFlash: true // Allow flash messages
    })
  }
);

  // Resend Verification

  // Route middleware to makesure user is logged in 
  function isLoggedIn(req, res, next) {
    // If Authenticated, Continue
    if (req.isAuthenticated())
      return next();    
    // If Not Authenticated, Redirect to home
    res.redirect('/');
  }
}