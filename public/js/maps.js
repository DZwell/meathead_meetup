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
  var dropDown = document.getElementById('area');
  var input = dropDown.options;[dropDown.selectedIndex].value;
  console.log(input);
  for (key in neighborhoods) {
    if (input == key) {
        console.log(key);
        var latlngStr = neighborhoods[key];
        console.log(latlngStr);
    }
  };
  console.log(latlngStr)
  var latlngStr = input.split(',', 2);
  console.log(latlngStr);
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
