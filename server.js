'use strict';

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var meatheadsRouter = require(__dirname + '/routes/meathead_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/meathead_dev');
app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public/'));

app.use('/api', meatheadsRouter);

app.listen(app.get('port'), function() {
  console.log('Listening at ' + app.get('port') + '.');
});
