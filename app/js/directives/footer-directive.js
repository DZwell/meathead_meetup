'use strict';

module.exports = function(app) {
  app.directive('footerDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/footer-directive-template.html'
    }
  });
};
