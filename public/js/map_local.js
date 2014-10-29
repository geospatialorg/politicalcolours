var northB = [57, 37];
var southB = [33.0, 13.0];

/* Basemap Layers */
var mapquestOSM = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
    maxZoom: 17,
    subdomains: ["otile1", "otile2", "otile3", "otile4"],
    bounds: new L.LatLngBounds(southB, northB),
    attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.'
});

var map = L.map("map", {
    zoom: 7,
    center: [44.07797245672571, 27.197773080210172],
    layers: [mapquestOSM],
    zoomControl: true,
    attributionControl: false
});