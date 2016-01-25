'use strict';

var mongoose = require('mongoose');

var meatheadSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true},
  // basic: {
  //   username: String,
  //   password: String
  // }
});

module.exports = mongoose.model('Meathead', meatheadSchema);
