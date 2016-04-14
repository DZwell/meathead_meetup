'use strict';

// var $script = require('scriptjs');

var googleMapsLoader = require('google-maps');
require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
// require('ngmap');
var angular = window.angular;

//
// googleMapsLoader.load(function(google) {
//   new google.maps.Map(el, options);
// });

// googleMapsLoader.KEY = '=AIzaSyD1j-GHVkBSNe2evr1j6lhZworXFsUwubA';
// googleMapsLoader.LIBRARIES = ['places'];
//

var meatheadApp = angular.module('MeatheadApp', ['ngRoute', 'ngCookies', 'base64']);
require('./services/services')(meatheadApp);
require('./directives/directives')(meatheadApp);

// Lib
// require('./lib/maps');

// $script("//maps.google.com/maps/api/js?key=AIzaSyD1j-GHVkBSNe2evr1j6lhZworXFsUwubA&callback=initMap&libraries=places", function() {
//   $script('./lib/maps.js', function() {
//     console.log('Maps is loaded.');
//   });
// });

// Resources
require('./auth/auth')(meatheadApp);
require('./users/users')(meatheadApp);
require('./map/map')(meatheadApp);

meatheadApp.config(['$routeProvider', function($route) {
  $route
  .when('/home', {
    templateUrl: '/templates/home-view-directive-template.html',
    controller: 'AuthController'
  })
  .when('/login', {
    templateUrl: '/templates/login-view-directive-template.html',
    controller: 'AuthController'
  })
  .when('/profile', {
    templateUrl: '/templates/user-profile-view-directive-template.html',
    controller: 'UserController'
  })
  .when('/search', {
    templateUrl: '/templates/search-view-directive-template.html',
    controller: 'UserController'
  })
  .when('/:username', {
    templateUrl: '/templates/user-profile-view-directive-template.html',
    controller: 'UserController'
  })
  .otherwise({
    redirectTo: '/home'
  })
}]);
