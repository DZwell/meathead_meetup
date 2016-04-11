'use strict';

module.exports = function(app) {
  app.directive('loginViewDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/login-view-directive-template.html'
    }
  });
};
