'use strict';

module.exports = function(app) {
  app.directive('testDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/test-directive-template.html'
    }
  });
};
