// var map;
// var autocomplete;
// var service;
// var marker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.062, lng: -101.778},
    scrollwheel: false,
    zoom: 3,
    scaleControl: true
  });

  var infowindow = new google.maps.InfoWindow({content: ''});
  var geocoder = new google.maps.Geocoder();
  var service = new google.maps.places.PlacesService(map);
  var input = document.getElementById('user-location-search');
  var types = document.getElementById('form_container');
  var autocomplete = new google.maps.places.Autocomplete(input);
  var marker = new google.maps.Marker();


  $('#submit').on('click', function(e) {
    e.preventDefault();
    if ($('#address').is(':checked')){
      geocodeAddress(geocoder, map);
    }
    if ($('#place').is(':checked')){
      setupClickListener(['establishment'])
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
    }); //End marker event listener
  } //End createMarker


    autocomplete.bindTo('bounds', map);
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });


    autocomplete.addListener('place_changed', function() {
      infowindow.close();
      marker.setVisible(false);
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert("Autocomplete's returned place contains no geometry");
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      }
      else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);  // Why 17? Because it looks good.
      }
      marker.setIcon(/** @type {google.maps.Icon} */({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);
  }); //End autocomplete event listener


  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  function setupClickListener(id, types) {
    var radioButton = document.getElementById(id);
    radioButton.addEventListener('click', function() {
      autocomplete.setTypes(types);
    });
  }
}


