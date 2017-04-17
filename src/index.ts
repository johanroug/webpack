import * as $ from 'jquery';
import {} from 'googlemaps'; // @typings for google maps
import loadGoogleMapsAPI from 'load-google-maps-api'; // Simply takes below code and injects into scripttag on load

import './styles/styles.scss';

loadGoogleMapsAPI(
  {
    key: 'write key here',
    language: 'da'
  }).then((googleMaps) => {
    let vanlose = {lat: 55.695142, lng: 12.498335};
    let map = new googleMaps.Map(document.getElementById('map'), {
      zoom: 17,
      center: vanlose
    });
    new googleMaps.Marker({
      position: vanlose,
      map: map
    });
  }).catch((err) => {
  console.error(err);
});
