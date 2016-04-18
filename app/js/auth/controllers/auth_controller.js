'use strict';

module.exports = function(app) {
  app.controller('AuthController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
    $scope.getUser = function() {
      $scope.token = $cookies.get('token');
      $http.defaults.headers.common.token = $scope.token;
      $http.get('/api/users')
      .then(function(res) {
        $scope.currentUser = {
          _id: res.data._id,
          username: res.data.username,
          name: res.data.name,
          email: res.data.email,
          biography: res.data.biography,
          quote: res.data.quote,
          location: res.data.location,
          gym: res.data.gym
        };
      }, function(err) {
        console.log(err);
      });
    };

    // if user isn't cuurent user,
    // show username, quote, bio, email form
    // email form shoyld be populated by {{ profile.email }}

    // PROBLEMS
    // how to get 'user' from URL
    // data-ng-if="!currentUser" data-ng-if="token"
    $scope.getProfile = function(user) {
      $http.get('/api/users')
      .then(function(res) {
        $scope.profile = {
          username: res.data.username,
          biography: res.data.biography,
          email: res.data.email,
          quote: res.data.quote
        };
      }, function(err) {
        console.log(err);
      });
    };

    $scope.redirect = function() {
      $location.path('/home');
    };

    $scope.logOut = function() {
      $scope.token = null;
      $scope.currentUser = null;
      $cookies.remove('token');
      $location.path('/home');
    };
  }]);
};
