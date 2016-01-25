'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var Meathead = require(__dirname + '/../models/meathead');
var handleError = require(__dirname + '/../lib/handleServerError');

var meatheadsRouter = module.exports = exports = express.Router();

meatheadsRouter.get('/meatheads', function(req, res) {
  Meathead.find({}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

meatheadsRouter.post('/meatheads', bodyParser.json(), function(req, res) {
  var newMeathead = new Meathead(req.body);
  newMeathead.save(function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

meatheadsRouter.put('/meatheads/:id', bodyParser.json(), function(req, res) {
  var meatheadData = req.body;
  delete meatheadData._id;
  Meathead.update({_id: req.params.id}, meatheadData, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'A new meathead joins the search for a buddy!'});
  });
});

meatheadsRouter.delete('/meatheads/:id', function(req, res) {
  Meathead.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'Meathead removed.'});
  });
});
