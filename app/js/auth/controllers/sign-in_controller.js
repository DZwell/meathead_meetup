'use strict';

module.exports = function(app) {
  app.controller('SignInController', ['$scope', '$http', '$location', '$base64', '$cookies', function($scope, $http, $location, $base64, $cookies) {
    $scope.authenticate = function(user) {
      $http({
        method: 'GET',
        url: '/api/sign-in',
        headers: {
          'Authorization': 'Basic ' + $base64.encode(user.username + ':' + user.password)
        }
      })
      .then(function(res) {
        $cookies.put('token', res.data.token);
        $scope.renderRes(res.data.msg);
        $scope.getUser();
        $location.path('/profile');
      }, function(err) {
        console.log(err);
      });
    };

    $scope.renderRes = function(res) {
      console.log(res);
    };
  }]);
};
