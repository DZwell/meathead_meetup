'use strict';

require('angular/angular');
var angular = window.angular;

var meatheadApp = angular.module('MeatheadApp', []);

// AngularJS
// require('./filters/filters')(meatheadApp);
// require('./services/services')(meatheadApp);
// require('./controllers/controllers')(meatheadApp);
// require('./directives/directives')(meatheadApp);

// Resources
require('./users/users')(meatheadApp);

// Lib
require('./lib/scroll');
require('./lib/sign-up');
require('./lib/sign-in');
