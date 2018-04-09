const User = require('../../models/user.js');

module.exports = (app) => {
  //Sign Up

  app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const {
      username,
      email,
      firstName,
      lastName,
      password
    } = body;

    if (!username) {
      return res.send({
        success: false,
        message: 'Error: Username cannot be blank.'
      });
    }

    if (!email) {
      return res.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }

    if (!firstName) {
      return res.send({
        success: false,
        message: 'Error: First name cannot be blank.'
      });
    }

    if (!lastName) {
      return res.send({
        success: false,
        message: 'Error: Last name cannot be blank.'
      });
    }

    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }

    email = email.toLowerCase();

    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save

    User.find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server Error.'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account Already Exists'
        });
      } 

      // Save new user

      const newUser = new User();

      newUser.username = username;
      newUser.email = email;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server Error.'
          });
        }
        return res.send({
          success: true,
          message: 'Signed up'
        })
        
      })
    })



  })
}