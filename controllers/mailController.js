'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for 465, false for other ports
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
        subject: 'Vocafy - Confirm Your Email', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
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
        text: 'Pass Reset', // plain text body
        html: '<b>Resetttt</b>' // html body
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          return console.log(error);
        }
      });
    }
  }
