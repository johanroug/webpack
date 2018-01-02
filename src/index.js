import loadGoogleMapsAPI from 'load-google-maps-api'; // Simply takes below code and injects into scripttag on load
import './styles/styles.scss';
// import $ from 'jquery';

loadGoogleMapsAPI({
  key: 'AIzaSyBjvbaEopZYsBYCh6iWiKZYf_jSB8dAUFM',
  language: 'da',
  libraries: ['places']
}).then(() => {

  // DATA
  const json = [
    { id: 12, moreInfo: 'test 01', name: 'hi 1', position: {lat: 55.695142, lng: 12.498335} },
    { id: 2, moreInfo: 'test 02', name: 'hi 2', position: {lat: 55.695599, lng: 12.500282} },
    { id: 3, moreInfo: 'test 03', name: 'hi 3', position: {lat: 55.695584, lng: 12.501427} },
    { id: 21, moreInfo: 'test 04', name: 'hi 3', position: {lat: 55.696584, lng: 12.501227} }
  ];

  const mysearch =  document.getElementById("mysearch");
  let markers = [];
  let localBounds = [];

  const options = { // options for map
    maxZoom: 17,
    zoom: 1,
    center: {lat: 55.695142, lng: 12.498335}
  }

  const map = new google.maps.Map(document.getElementById("map"), options); // map

  // do search
  mysearch.onkeyup = function(value) {
    // Clear out the old markers.
    deleteMarkers();

    // Do search
    search(value);
  };

  function search(value) {
    const searchVal = value.target.value;
    
    if ( searchVal !== '') {        
      // filter results
      const positions = json.filter(item => {
        const result = item.id;          
        return -1 < result.toString().toLowerCase().indexOf( searchVal );
      });    

      if ( positions.length > 0 ) {
        let bounds = new google.maps.LatLngBounds();          
        
        // Create a marker for each place.
        positions.forEach(function(place) {           
          addMarker(place); 
        });
        
        for (let i  = 0; i < localBounds.length; i ++) {
          bounds.extend(localBounds[i]);        
        }
        map.fitBounds(bounds);
        map.panToBounds(bounds);
      }
    }      
  }

  function addMarker( place ) {          
    const marker = new google.maps.Marker({       
      map: map,
      position: place.position,
      details: {
        name: place.name,
        myinfo: place.moreInfo
      }
    });      
    
    markers.push(marker);
    localBounds.push(place.position);

    // get details on click
    marker.addListener('click', function(event) {
      console.log(this.details);
    });

  }
  
  function deleteMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
    localBounds = [];
  }

  





  // let marker = new google.maps.Marker({
  //   position: {
  //     lat: 55.695142, 
  //     lng: 12.498335
  //   },
  //   map: map,
  //   draggable: true
  // });
  

/*

  // Create the search box and link it to the UI element.
  let input = document.getElementById('pac-input');
  let searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    let places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    let bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      
      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  */
  
}).catch((err) => {
  console.error(err);
});
