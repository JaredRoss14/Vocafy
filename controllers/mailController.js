'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // generated ethereal user
    pass: process.env.EMAIL_PASS // generated ethereal password
  }
});

  module.exports = {
    sendVerificationEmail: function (email, username, token) {
      let mailOptions = {
        from: '"Vocafy Team" <vocafy@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Vocafy - Verify Your Account', // Subject line
        text: `http://localhost:3000/verify/${username}/${token}`, // plain text body
        html: `Please verify your account <a href="http://localhost:3000/verify/${username}/${token}">here</a>` // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message Sent: ', info.messageId);
      });
    },

    sendResetPasswordEmail: function (email, username, token) {
      let mailOptions = {
        from: '"Vocafy Team" <vocafy@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Vocafy - Reset Your Password', // Subject line
        text: `https://employease.herokuapp.com/verify/${username}/${token}`,
        html: `<a href="https://employease.herokuapp.com/verify/${username}/${token}` 
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          return console.log(error);
        }
      });
    }
  }
