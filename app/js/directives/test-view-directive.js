'use strict';

module.exports = function(app) {
  app.directive('testViewDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/test-view-directive-template.html'
    }
  });
};
