'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
var angular = window.angular;

var meatheadApp = angular.module('MeatheadApp', ['ngRoute', 'ngCookies', 'base64']);
require('./directives/directives')(meatheadApp);

// Resources
require('./auth/auth')(meatheadApp);
require('./users/users')(meatheadApp);
require('./map/map')(meatheadApp);

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
    .otherwise({
      redirectTo: '/main'
    })
}]);
