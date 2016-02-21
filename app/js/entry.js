'use strict';

require('angular/angular');
var angular = window.angular;
var google = window.google;

var meatheadApp = angular.module('MeatheadApp', []);

// AngularJS
// require('./filters/filters')(meatheadApp);
// require('./services/services')(meatheadApp);
// require('./controllers/controllers')(meatheadApp);
// require('./directives/directives')(meatheadApp);

// Resources
require('./gyms/gyms')(meatheadApp);
require('./users/users')(meatheadApp);

// Lib
require('./lib/scroll');
require('./lib/sign-up');
require('./lib/sign-in');
// require('./lib/test-map');
