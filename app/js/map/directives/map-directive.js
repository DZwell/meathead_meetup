'use strict';

module.exports = function(app) {
  app.directive('mapDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/map-directive-template.html'
    }
  });
};
