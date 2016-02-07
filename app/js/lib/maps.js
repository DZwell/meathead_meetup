'use strict';

var west = '47.566789, -122.386695';
var north = '47.795540, -122.308983';
var central = '47.609307, -122.335581';
var south = '47.530853, -122.270520';

var neighborhoods = [west, central, south, north];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 40.731, lng: -73.997}
  });
  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;

  document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    geocodeLatLng(geocoder, map, infowindow);
  });
}

function geocodeLatLng(geocoder, map, infowindow) {
  // var $dropDown = $('#area');
  // console.log($dropDown);
  var input = ('#area option:selected').val();
  console.log(input)
  for (key in neighborhoods) {
    if (input == key) {
        var latlngStr = neighborhoods[key];
    }
  };
  var latlngStr = input.split(',', 2);
  var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        map.setZoom(11);
        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
        infowindow.setContent(results[1].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}
