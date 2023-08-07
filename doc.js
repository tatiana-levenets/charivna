/*function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
  });
  const image =
    "map_marker.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: -33.89, lng: 151.274 },
    map,
    icon: image,
  });
}*/
function initMap() {
  // Create a new StyledMapType object, passing it an array of styles,
  // and the name to be displayed on the map type control.
  const styledMapType = new google.maps.StyledMapType(
   [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#b4d4e1"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
,
    { name: "Styled Map" }
  );
  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.97989726130534, lng: 36.30887683182199 },
    zoom: 16,
    mapTypeControlOptions: {
      mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
    },
  });
  const image =
    "map_marker.png";
  const charivnaMarker = new google.maps.Marker({
    position: { lat: 49.97989726130534, lng: 36.30887683182199 },
    map,
    icon: image,
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
}

