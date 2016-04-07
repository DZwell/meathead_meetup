'use strict';

module.exports = function(app) {
  app.controller('TempController', ['$scope', function($scope) {

    $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };
    // $scope.gyms = [];
    // $scope.infowindow;
    // $scope.map;

    // $scope.initMap = function() {
    //   var usa = {
    //     lat: 39.062, lng: -101.778
    //   };

    //   map = new google.maps.Map(document.getElementById('map'), {
    //     center: usa,
    //     scrollwheel: false,
    //     zoom: 3,
    //     scaleControl: true
    //   });

    //   var infowindow = new google.maps.InfoWindow();
    //   var geocoder = new google.maps.Geocoder();

    //   $('#submit').on('click', function(e) {
    //     e.preventDefault();
    //     geocodeAddress(geocoder, map);
    //     map.setZoom(13);
    //   });
    // };

    // $scope.geocodeAddress = function(geocoder, resultsMap) {
    //   var address = $('#user-location-search').val();
    //   geocoder.geocode({
    //     'address': address
    //   }, function(results, status) {
    //     if (status === google.maps.GeocoderStatus.OK) {
    //       resultsMap.setCenter(results[0].geometry.location);
    //       var latitude = results[0].geometry.location.lat();
    //       var longitude = results[0].geometry.location.lng();
    //       var userLocation = {lat: latitude, lng: longitude};

    //       var service = new google.maps.places.PlacesService(map);
    //       service.nearbySearch({
    //         location: userLocation,
    //         radius: 1000,
    //         types: ['gym']
    //       }, callback);
    //     }

    //     else {
    //       console.log('Geocode was not successful for the following reason: ' + status);
    //     }
    //   });
    // };

    // $scope.callback = function(results, status) {
    //   if (status === google.maps.places.PlacesServiceStatus.OK) {
    //     for (var i = 0; i < results.length; i++) {
    //       createMarker(results[i]);
    //     }
    //   }
    // };

    // $scope.createMarker = function(place) {
    //   var infowindow = new google.maps.InfoWindow();
    //   var placeLoc = place.geometry.location;
    //   var marker = new google.maps.Marker({
    //     map: map,
    //     position: place.geometry.location
    //   });

    //   $scope.gyms.push(place);

    //   google.maps.event.addListener(marker, 'click', function() {
    //     infowindow.setContent(place.name);
    //     infowindow.open(map, this);
    //   });
    // };
  }]);
};
