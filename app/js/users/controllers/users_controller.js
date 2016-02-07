'use strict';

module.exports = function(app) {
  app.controller('UsersController', ['$scope', '$http', function($scope, $http) {
    $scope.items = [];
    $scope.newItem = {};
    $scope.username = 'Chris Harrison';
    $scope.currentContent = {};

    $scope.getAll = function() {
      $http.get('/api/users')
        .then(function(res) {
          $scope.items = res.data;
        }, function(err) {
          console.log(err.data);
        });
    };

    $scope.create = function(item) {
      $http.post('/api/users', item)
        .then(function(res) {
          $scope.items.push(res.data);
          $scope.newItem = {};
        }, function(err) {
          console.log(err.data)
        });
    };

    $scope.update = function(item) {
      item.editing = false;

      $http.put('/api/users/' + item._id, item)
        .then(function(res) {
          console.log('Item changed.');
        }, function(err) {
          $scope.errors.push('Could not find list item.');
        });
    };

    $scope.remove = function(item) {
      $scope.items.splice($scope.items.indexOf(item), 1);
      $http.delete('/api/users/' + item._id)
        .then(function(res) {
          console.log('Item deleted.');
        }, function(err) {
          console.log(err.data);
          $scope.errors.push('Could not delete list item.');
          $scope.getAll();
        });
    };

    $scope.save = function(item) {
      item.editing = true;

      $scope.currentContent[item._id] = {content: item.content};
    };

    $scope.reset = function(item) {
      var tempItem = $scope.currentContent[item._id];

      $scope.item = angular.copy($scope.master);
      item.content = tempItem.content;
      item.editing = false;
    };
  }]);
};
