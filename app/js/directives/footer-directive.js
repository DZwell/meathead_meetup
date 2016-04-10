'use strict';

module.exports = function(app) {
  app.directive('footerDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/general/footer-directive-template.html'
    }
  });
};
