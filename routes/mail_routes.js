'use strict';

var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var contactRouter = module.exports = exports = express.Router();

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_USR,
    pass: process.env.MAIL_PW
  }
});

contactRouter.post('/', function(req, res) {
  var mailOptions = {
    from: {
      name: 'Meathead Meet-Up',
      address: process.env.MAIL_ADDR
    },
    to: {
      name: 'Meathead Meet-Up',
      address: process.env.MAIL_ADDR
    },
    subject: 'Message from Meathead Meet-Up',
    text: 'Name: ' + req.body['contact-form-name'] + 'Subject: ' +
    req.body['contact-form-subject'] + '\n' + 'Body: ' +
    req.body['contact-form-message'] + '\n' + '\n' + 'You may contact this sender at: ' +
    req.body['contact-form-mail']
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });

  res.send('Your message has been sent.');
});
