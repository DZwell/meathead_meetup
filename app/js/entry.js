'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
require('ngmap');
var angular = window.angular;

var meatheadApp = angular.module('MeatheadApp', ['ngRoute', 'ngCookies', 'base64', 'ngMap']);
require('./services/services')(meatheadApp);
require('./directives/directives')(meatheadApp);

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
  .otherwise({
    redirectTo: '/home'
  })
}]);
