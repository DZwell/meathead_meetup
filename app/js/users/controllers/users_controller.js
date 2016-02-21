'use strict';

module.exports = function(app) {
  app.controller('UsersController', ['$scope', '$http', function($scope, $http) {
    $scope.users = [];
    $scope.errors = [];
    $scope.newUser = {};
    $scope.username = 'Chris Harrison';
    $scope.gyms = [];
    $scope.currentContent = {};

    $scope.getAll = function() {
      $http.get('/api/users')
      .then(function(res) {
        $scope.users = res.data;
      }, function(err) {
        console.log(err.data);
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
        console.log('User edited.');
      }, function(err) {
        $scope.errors.push('User not found.');
      });
    };

    $scope.remove = function(user) {
      $scope.users.splice($scope.users.indexOf(user), 1);
      $http.delete('/api/users/' + user._id)
      .then(function(res) {
        console.log('User deleted.');
      }, function(err) {
        console.log(err.data);
        $scope.errors.push('Could not delete user.');
        $scope.getAll();
      });
    };

    $scope.save = function(user) {
      user.editing = true;

      $scope.currentContent[user._id] = {content: user.content};
    };

    $scope.reset = function(user) {
      var tempUser = $scope.currentContent[user._id];

      $scope.user = angular.copy($scope.master);
      user.content = tempUser.content;
      user.editing = false;
    };
  }]);
};
