var map;
var autocomplete;
var service;

function initMap() {
  var usa = {lat: 39.062, lng: -101.778};
  var infowindow = new google.maps.InfoWindow({content: ''});
  var geocoder = new google.maps.Geocoder();
  // var autocomplete = new google.maps.places.Autocomplete($('#user-location-search'));
  // autocomplete.bindTo('bounds', map);

  map = new google.maps.Map(document.getElementById('map'), {
    center: usa,
    scrollwheel: false,
    zoom: 3,
    scaleControl: true
  });

  $('#submit').on('click', function(e) {
    e.preventDefault();
    if ($('#address').is(':checked')){
      geocodeAddress(geocoder, map);
    }
    if ($('#place').is(':checked')){
      clickListener(['establishment'])
    }
    map.setZoom(13);
  });


  function geocodeAddress(geocoder, resultsMap) {
    var address = $('#user-location-search').val();
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
    var service = new google.maps.places.PlacesService(map);
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location,
    });

    var request = {reference: place.reference};
    google.maps.event.addListener(marker, 'click', function() {
      service.getDetails(request, function(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          infowindow.setContent('<div><strong>' + place.name + '</strong><br>'
            + place.formatted_address + '</div');
          infowindow.open(map, marker);
        }
      });
    })
  }


  function clickListener(id, types) {

  }

};


