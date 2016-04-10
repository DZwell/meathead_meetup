'use strict';

module.exports = function(app) {
  app.directive('fitnessListDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../../templates/deprecated/fitness_list_directive_template.html'
    }
  });
};
