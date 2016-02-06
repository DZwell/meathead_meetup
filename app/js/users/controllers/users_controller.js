'use strict';

module.exports = function(app) {
  app.controller('UsersController', ['$scope', function($scope) {
    $scope.greeting = 'hello world';
  }]);
};
