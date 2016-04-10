'use strict';

module.exports = function(app) {
  app.directive('viewDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/home/view-directive-template.html'
    }
  });
};
