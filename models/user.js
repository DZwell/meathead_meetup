'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var eat = require('eat');

var userSchema = new mongoose.Schema({
  auth: { // auth main object just used to delete auth object
    basic: {
      username: String,
      password: String
    }
  },

  // ,

  // name: {
  //   type: String,
  //   required: true
  // },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
  // ,
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   trim: true
  // }
});

userSchema.methods.hashPassword = function(password) {
  var hash = this.auth.basic.password = bcrypt.hashSync(password, 8);
  return hash;
};

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compareSync(password, this.auth.basic.password);
};

module.exports = mongoose.model('User', userSchema);
