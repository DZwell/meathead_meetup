'use strict';

module.exports = function(app) {
  app.controller('SignUpController', ['$scope', '$http', '$cookies', '$location', function($scope, $http, $cookies, $location) {
    $scope.authenticate = function(user) {
      $http.post('/api/sign-up', user)
        .then(function(res){
          $cookies.put('token', res.data.token);
          $scope.getUser();
          $location.path('/profile');
        }, function(err) {
          console.log(err.data);
        });
    };
  }]);
};
