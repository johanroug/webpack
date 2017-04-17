import * as $ from 'jquery';
import loadGoogleMapsAPI from 'load-google-maps-api';

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
