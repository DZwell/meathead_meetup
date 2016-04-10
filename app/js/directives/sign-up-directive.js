'use strict';

module.exports = function(app) {
  app.directive('signUpDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/home/sign-up-directive-template.html'
    }
  });
};
