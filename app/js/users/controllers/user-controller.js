'use strict';

module.exports = function(app) {
  app.controller('UserController', ['$scope', '$http', '$location', '$cookies', function($scope, $http, $location, $cookies) {
    $scope.users = [];
    $scope.newUser = {};
    $scope.gyms = [];
    $scope.current = {};
    $scope.profile = {};

    $scope.getAll = function() {
      $http.get('/api/users')
      .then(function(res) {
        $scope.users = res.data;
      }, function(err) {
        console.log(err.data);
      });
    };

    $scope.get = function(user) {
      $http.get('/api/users', user)
      .then(function(res) {
        $scope.profile = res.data;
      }, function(err) {
        console.log(err.data)
      });
    };

    $scope.create = function(user) {
    $http.post('/api/users', user)
      .then(function(res) {
        $scope.users.push(res.data);
        $scope.newUser = {};
      }, function(err) {
        console.log(err.data)
      });
    };

    $scope.update = function(user) {
      user.editing = false;

      $http.put('/api/users/' + user._id, user)
      .then(function(res) {
      }, function(err) {
        $scope.errors.push('User not found.');
      });
    };

    $scope.remove = function(user) {
      user.toBeDeleted = false;

      $scope.users.splice($scope.users.indexOf(user), 1);
      $http.delete('/api/users/' + user._id)
      .then(function(res) {
        $location.path('/home');
      }, function(err) {
        console.log(err.data);
        $scope.errors.push('Could not delete user.');
        $scope.getAll();
      });
    };

    $scope.save = function(user) {
      user.editing = true;

      $scope.current[user._id] = {
        name: user.name,
        email: user.email,
        gym: user.gym,
        quote: user.quote,
        biography: user.biography
      };
    };

    $scope.reset = function(user) {
      var tempUser = $scope.current[user._id];

      $scope.user = angular.copy($scope.master);
      user.name = tempUser.name;
      user.email = tempUser.email;
      user.gym = tempUser.gym;
      user.quote = tempUser.quote;
      user.biography = tempUser.biography;
      user.editing = false;
    };

    $scope.toBeDeleted = function(user) {
      user.toBeDeleted = true;
    };

    $scope.noDelete = function(user) {
      user.toBeDeleted = false;
    };
  }]);
};
