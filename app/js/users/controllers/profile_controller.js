'use strict';

module.exports = function(app) {
  app.controller('ProfileController', ['$scope', '$http', '$locaton', '$cookies', 'appResource', function($scope, $http, $location, $cookies, appResource) {
    var profileResource = appResource('users');


  }]);
};
