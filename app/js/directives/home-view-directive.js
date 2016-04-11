'use strict';

module.exports = function(app) {
  app.directive('homeViewDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/redesign/home-vew-directive-template.html'
    }
  });
};
