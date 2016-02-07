'use strict';

module.exports = function(app) {
  app.controller('ShowAllUsersController', ['$scope', '$http', function($scope, $http) {
    $http.get('/api/users')
    .then(function(res) {
      $scope.users = res.data;
    }, function(err) {
      console.log(err);
    });
  }]);
}
