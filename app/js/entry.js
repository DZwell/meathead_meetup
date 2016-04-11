'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');
var angular = window.angular;

var meatheadApp = angular.module('MeatheadApp', ['ngRoute', 'ngCookies', 'base64']);
require('./services/services')(meatheadApp);
require('./directives/directives')(meatheadApp);

// Resources
require('./auth/auth')(meatheadApp);
require('./users/users')(meatheadApp);

meatheadApp.config(['$routeProvider', function($route) {
  $route
  .when('/home', {
    templateUrl: '/templates/redesign/home-view-directive-template.html',
    controller: 'AuthController'
  })
  .when('/login', {
    templateUrl: '/templates/redesign/login-view-directive-template.html',
    controller: 'AuthController'
  })
  .when('/profile', {
    templateUrl: '/templates/redesign/user-profile-view-directive-template.html',
    controller: 'ProfileController'
  })
  .otherwise({
    redirectTo: '/home'
  })
}]);
