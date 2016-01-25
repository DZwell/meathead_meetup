'use strict';

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var meatheadsRouter = require(__dirname + '/routes/meathead_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/meathead_dev');

app.use(express.static(__dirname + '/public/'));

app.use('/api', meatheadsRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('Listening at 3000.');
});
