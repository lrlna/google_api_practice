function initialize() {
  var theirLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var myLatlng = new google.maps.LatLng(49.2818404,-123.1091149,19)
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var theirMarker = new google.maps.Marker({
      position: theirLatlng,
      map: map,
      title: 'Practicin!'
  });

  var myMarker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Raincouver'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
