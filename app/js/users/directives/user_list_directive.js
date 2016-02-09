'use strict';

module.exports = function(app) {
  app.directive('userListDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../../templates/user_list_directive_template.html'
    }
  });
};
