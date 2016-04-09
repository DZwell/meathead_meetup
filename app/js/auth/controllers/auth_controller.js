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

    $scope.logOut = function() {
      $scope.token = null;
      $scope.currentUser = null;
      $cookies.remove('token');
      $location.path('/');
    };
  }]);
};
