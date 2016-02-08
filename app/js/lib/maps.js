 var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 12,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

 //  function codeAddress() {
 //    var address = document.getElementById("gym").value;
 //    geocoder.geocode( { 'address': address}, function(results, status) {
 //      if (status == google.maps.GeocoderStatus.OK) {
 //        map.setCenter(results[0].geometry.location);
 //        var marker = new google.maps.Marker({
 //            map: map,
 //            position: results[0].geometry.location
 //        });
 //      } else {
 //        alert("Geocode was not successful for the following reason: " + status);
 //      }
 //    });
 //  }


function placeFind() {
  var mapOptions = {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  var input = $('#gym');

  // Create the autocomplete helper, and associate it with
  // an HTML text input box.
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });

  // Get the full place details when the user selects a place from the
  // list of suggestions.
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    infowindow.close();
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Set the position of the marker using the place ID and location.
    marker.setPlace(/** @type {!google.maps.Place} */ ({
      placeId: place.place_id,
      location: place.geometry.location
    }));
    marker.setVisible(true);

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Place ID: ' + place.place_id + '<br>' +
        place.formatted_address + '</div>');
    infowindow.open(map, marker);
  });
}
