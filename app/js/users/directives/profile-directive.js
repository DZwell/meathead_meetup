'use strict';

module.exports = function(app) {
  app.directive('profileDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/profile/profile-directive-template.html'
    }
  });
};
