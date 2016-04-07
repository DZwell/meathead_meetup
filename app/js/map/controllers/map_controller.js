'use strict';

module.exports = function(app) {
  app.controller('MapController', ['$scope', function($scope, uiGmapGoogleMapApi) {
    // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    // uiGmapGoogleMapApi.then(function(maps) {
    //                   $scope.map = {
    //                 center: {
    //                     latitude: startingLocation.lat,
    //                     longitude: startingLocation.long
    //                 },
    //                 zoom: 8
    //             };
    // });
  }]);
};
