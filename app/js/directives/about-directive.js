'use strict';

module.exports = function(app) {
  app.directive('aboutDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/home/about-directive-template.html'
    }
  });
};
