'use strict';

module.exports = function(app) {
  app.controller('SigninController', ['$scope', '$http', '$location', '$base64', '$cookies', function($scope, $http, $location, $base64, $cookies) {
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
        $location.path('/map');
      }, function(err) {
        console.log(err);
      });
    };

    $scope.renderRes = function(res) {
      // var element = document.getElementById('sign-up-success');

      // element.innerHTML = res;
      console.log(res);
    };

    // $scope.changePlaces = function() {
    //   $location.path('/sign-up');
    // };
  }]);
};
