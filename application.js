

var raincouver = new google.maps.LatLng(49.2818404,-123.1091149,19);
var cool = new google.maps.LatLng(49.276042,-123.141830);
var marker;
var map;

function initialize() {
  var mapOptions = {
    zoom: 13,
    center: raincouver
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: cool
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
