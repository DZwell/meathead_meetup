'use strict';

module.exports = function(app) {
  app.directive('landingDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/home/landing-directive-template.html'
    }
  });
};
