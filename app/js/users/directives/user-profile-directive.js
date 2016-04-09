'use strict';

module.exports = function(app) {
  app.directive('userProfileDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/user-profile-directive-template.html'
    }
  });
};
