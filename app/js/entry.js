'use strict';

require('angular/angular');
var angular = window.angular;

var meatheadApp = angular.module('MeatheadApp', []);

// AngularJS
require('./map/map')(meatheadApp);
require('./users/users')(meatheadApp);

// Lib
require('./lib/scroll');
require('./lib/sign-up');
require('./lib/sign-in');
// require('./lib/test-map');
