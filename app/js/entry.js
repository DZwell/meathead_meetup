'use strict';

require('lodash');
require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
// require('angular-google-maps');
var angular = window.angular;

var meatheadApp = angular.module('MeatheadApp', ['ngRoute', 'ngCookies', 'base64']);
require('./services/services')(meatheadApp);
require('./directives/directives')(meatheadApp);

// Resources
require('./auth/auth')(meatheadApp);
require('./users/users')(meatheadApp);
// require('./map/map')(meatheadApp);

meatheadApp.config(['$routeProvider', function($route) {
  $route
  .when('/main', {
    templateUrl: '/templates/main-view-directive-template.html',
    controller: 'AuthController'
  })
  .when('/map', {
    templateUrl: '/templates/map-directive-template.html',
    controller: 'MapController'
  })
  .when('/profile', {
    templateUrl: '/templates/profile-directive-template.html',
    controller: 'UsersController'
  })
  .otherwise({
    redirectTo: '/main'
  })
  // uiGmapGoogleMapApiProvider
  // .configure({
  //   key: 'AIzaSyD1j-GHVkBSNe2evr1j6lhZworXFsUwubA',
  //   v: '3.20',
  //   libraries: 'weather,geometry,visualization'
  // })
}]);
