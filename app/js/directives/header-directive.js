'use strict';

module.exports = function(app) {
  app.directive('headerDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/profile/header-directive-template.html'
    }
  });
};
