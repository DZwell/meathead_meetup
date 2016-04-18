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

    // 1.  go to meathead.com/#/<username>
    // 2.  Take <username> and .get to search DB for that user
    // 3.  use res to fill in username, bio, and quote on page, and email as the recipient of the email form.
    // 4.  make post req to /mail to email that user w/ the message and subject from the email along with currentUser's email address as the sender.



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
