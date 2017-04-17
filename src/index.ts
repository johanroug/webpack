import * as $ from 'jquery';
import loadGoogleMapsAPI from 'load-google-maps-api'; // Simply takes below code and injects into scripttag on load
import './styles/styles.scss';

$(function() {
  $('body').css('background', 'green');
});

loadGoogleMapsAPI({
  key: 'write key here',
  language: 'da'
}).then((googleMaps) => {
  let vanlose = { lat: 55.695142, lng: 12.498335 };
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: vanlose
  });
  new google.maps.Marker({
    position: vanlose,
    map: map
  });
}).catch((err) => {
  console.error(err);
});
