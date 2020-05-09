const { Client, Status } = require('@googlemaps/google-maps-services-js');

const google = new Client({});

let map;
let service;
let infoWindow;

function createMarker(place) {
    const marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', () => {
        infoWindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Location Coordinates: ' + place.geometry.location + '</div>');
        infoWindow.open(map, this);
    });
}

function initMap() {
    // Basemap environment
    const victoria = new google.maps.LatLng(48.4284, -123.3656);
    const options = {
        // center: {lat: 48.4284, lng: -123.3656},
        center: victoria,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };

    // Create map
    map = new google.maps.Map(document.getElementById('map'), options);

    // POI Approach 1:
    // Create info window
    infoWindow = new google.maps.InfoWindow();

    const request = {
        query: 'Sura Korean Restaurant',
        fields: ['name', 'geometry'],
    };

    service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i += 1) {
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
        }
    });

    // POI Approach 2:
    // Create search box
    const input = document.getElementById('search');
    const searchBox = new google.maps.places.SearchBox(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve more details for that place
    searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
            return;
        }

        // Clear out the old markers
        markers.forEach((m) => {
            m.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((p) => {
            if (!p.geometry) {
                console.log('Returned place contains no geometry');
                return;
            }

            // Create a marker for each place
            markers.push(new google.maps.Marker({
                map: map,
                position: p.geometry.location
            }));
            if (p.geometry.viewport) {
                bounds.union(p.geometry.viewport);
            } else {
                bounds.extend(p.geometry.location);
            }
            map.fitBounds(bounds);
        });
    });
}

module.exports = initMap();
