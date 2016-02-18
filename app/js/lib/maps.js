var infowindow = null;
var map;

function initMap() {
  var usa = {lat: 39.062, lng: -101.778};

  map = new google.maps.Map(document.getElementById('map'), {
    center: usa,
    scrollwheel: false,
    zoom: 3,
    scaleControl: true
  });
  var geocoder = new google.maps.Geocoder();

  $('#submit').on('click', function(e) {
    e.preventDefault();
    geocodeAddress(geocoder, map);
    map.setZoom(13);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = $('#gym').val();
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var latitude = results[0].geometry.location.lat();
      var longitude = results[0].geometry.location.lng();
      var userLocation = {lat: latitude, lng: longitude};

      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: userLocation,
        radius: 1000,
        types: ['gym']
      }, callback);
    }
    else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}


function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var infowindow = new google.maps.InfoWindow();
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: place.geometry.location
  });


  google.maps.event.addListener(marker, 'click', function() {
    if (infowindow != null) {
      infowindow.close();
    }
    infowindow.setContent(place.name);
    infowindow.open(map, marker);
  });
}

