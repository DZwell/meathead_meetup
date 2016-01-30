'use strict';

var express = require('express');
var jsonParser = require('body-parser').json();
var handleError = require(__dirname + '/../lib/handle_error');
var basicHttp = require(__dirname + '/../lib/basic_http_authentication');
var basicError = require(__dirname + '/../lib/handle_auth_error');
var User = require(__dirname + '/../models/user');
var eatAuth = require(__dirname + '/../lib/eat_auth');

var authRouter = module.exports = exports = express.Router();

authRouter.post('/sign-up', jsonParser, function(req, res) {
  var user = new User();
  user.name = req.body.name;
  user.username = req.body.username;
  user.email = req.body.email;
  user.auth.basic.username = req.body.username;
  user.hashPassword(req.body.password);

  user.save(function(err, data) {
    if (err) return handleError(err, res);

    user.generateToken(function(err, token) {
      if (err) return handleError(err, res);

      res.json({success: true, msg: 'Success!  Please login above.',token: token});
    });
  });
});

authRouter.get('/sign-in', basicHttp, function(req, res) {
  if (!(req.auth.username && req.auth.password)) {
    basicError();
  }

  User.findOne({'auth.basic.username': req.auth.username}, function(err, user) {
    if (err || !user || !user.checkPassword(req.auth.password)) {
      basicError();
    }

    user.generateToken(function(err, token) {
      res.json({token: token, msg: 'Sign-in successful!'});
   });
  });
});

authRouter.get('/users', eatAuth, function(req, res) {
  res.json({username: req.user.username});
});
