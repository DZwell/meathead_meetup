'use strict';

var mongoose = require('mongoose');
var express = require('express');
var app = express();
var usersRouter = require(__dirname + '/routes/users_routes');
var authRouter = require(__dirname + '/routes/auth_routes');
var bodyParser = require('body-parser');

process.env.APP_SECRET = process.env.APP_SECRET || 'plschangethis';
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/meathead_dev');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/build/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/', authRouter);
app.use('/api/', usersRouter);

app.listen(app.get('port'), function() {
  console.log('Listening at ' + app.get('port') + '.');
});
