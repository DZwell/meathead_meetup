'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var User = require(__dirname + '/../models/user');
var eatAuth = require(__dirname + '/../lib/eat_auth');
var handleError = require(__dirname + '/../lib/handle_error');

var usersRouter = module.exports = exports = express.Router();

usersRouter.get('/users', eatAuth, function(req, res) {
  User.find({}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

usersRouter.put('/users/:id', bodyParser.json(), eatAuth, function(req, res) {
  var userData = req.body;
  delete userData._id;
  User.update({_id: req.params.id}, userData, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'A new user joins the search for a buddy!'});
  });
});

usersRouter.delete('/users/:id', eatAuth, function(req, res) {
  User.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'User removed.'});
  });
});
