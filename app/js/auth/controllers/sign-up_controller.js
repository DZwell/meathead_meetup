'use strict';

module.exports = function(app) {
  app.controller('SignupController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
    $scope.authenticate = function(user) {
      $http.post('/api/sign-up', user)
        .then(function(res){
          $cookies.put('token', res.data.token);
          $scope.renderRes(res.data.msg);
          $scope.getUser();
          $location.path('/users');
        }, function(err) {
          console.log(err.data);
        });
    };

    $scope.renderRes = function(res) {
      var element = document.getElementById('sign-up-success');

      element.innerHTML = res;
    };

    // $scope.changePlaces = function() {
    //   $location.path(__dirname + '/market');
    // };
  }]);
};
