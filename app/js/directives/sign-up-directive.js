'use strict';

module.exports = function(app) {
  app.directive('signUpDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/sign-up-directive-template.html'
    }
  });
};
