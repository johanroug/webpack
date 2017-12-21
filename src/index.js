import loadGoogleMapsAPI from 'load-google-maps-api'; // Simply takes below code and injects into scripttag on load
import './styles/styles.scss';

loadGoogleMapsAPI({
  key: 'AIzaSyBjvbaEopZYsBYCh6iWiKZYf_jSB8dAUFM',
  language: 'da'
}).then(() => {
  const coordinates = [
    {'lat': 55.695142, 'long': 12.498335},
    {'lat': 55.695558, 'long': 12.500135}
  ];

  let vanlose;
  let myMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: new google.maps.LatLng(coordinates[0].lat, coordinates[0].long),
  });

  for (let i = 0; i < coordinates.length; i ++) {
    const coords = coordinates[i];
    const latLng = new google.maps.LatLng(coords.lat,coords.long);
    
    new google.maps.Marker({
      position: latLng,
      map: myMap
    });
  }

}).catch((err) => {
  console.error(err);
});
