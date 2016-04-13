'use strict';

module.exports = function(app) {
  app.directive('searchViewDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '../templates/search-view-directive-template.html'
    }
  });
};
