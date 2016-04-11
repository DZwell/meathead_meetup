'use strict';

module.exports = function(app) {
  app.directive('loginViewDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/redesign/login-view-directive-template.html'
    }
  });
};
