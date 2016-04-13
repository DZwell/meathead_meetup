'use strict';

module.exports = function(app) {
  app.directive('searchDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/search-directive-template.html'
    }
  });
};
