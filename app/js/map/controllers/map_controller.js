'use strict';

module.exports = function(app) {
  app.controller('MapController', ['$scope', 'NgMap', function($scope, NgMap) {
    $scope.API = 'https://maps.google.com/maps/api/js?key=AIzaSyD1j-GHVkBSNe2evr1j6lhZworXFsUwubA&callback=initMap&libraries=places';

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  }]);
};
