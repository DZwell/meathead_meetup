

function initMap() {
  var usa = {lat: 39.062, lng: -101.778};

  map = new google.maps.Map(document.getElementById('map'), {
    center: usa,
    zoom: 3
  });
  var infowindow = new google.maps.InfoWindow();
  var geocoder = new google.maps.Geocoder();
  // var service = new google.maps.places.PlacesService(map);

  $('#submit').on('click', function(e) {
    e.preventDefault();
    geocodeAddress(geocoder, map);
    map.setZoom(13);
  });
}

function placeSearch() {
}

function geocodeAddress(geocoder, resultsMap) {
  var address = $('#gym').val();
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
        zoom: 10
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
