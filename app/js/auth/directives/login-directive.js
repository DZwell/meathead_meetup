'use strict';

module.exports = function(app) {
  app.directive('loginDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/redesign/login-directive-template.html'
    }
  });
};
