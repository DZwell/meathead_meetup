'use strict';

module.exports = function(app) {
  app.controller('TestController', ['$scope', function($scope) {
    $scope.testUsers = [
      {
        name: 'Jim',
        username: 'Jimtown2'
      }
    ];
  }]);
};
