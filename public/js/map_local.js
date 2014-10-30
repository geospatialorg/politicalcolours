/*jslint browser: true*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $*/
/*global L*/

var map;
var northB = [51.26, 34.71];
var southB = [40.61, 15.26];

/* Basemap Layers */
var mapquestOSM = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
    maxZoom: 16,
    subdomains: ["otile1", "otile2", "otile3", "otile4"],
    bounds: new L.LatLngBounds(southB, northB),
    noWrap: true,
    attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.'
});

map = L.map("map", {
    zoom: 7,
    center: [46.07, 25.19],
    layers: [mapquestOSM],
    zoomControl: false,
    attributionControl: true,
    maxZoom: 16,
    minZoom: 7,
    maxBounds: new L.LatLngBounds(southB, northB)
});

//Layer control
var isCollapsed = true;
var baseLayers = {
    "Open Street Map": mapquestOSM
};
var groupedOverlays = {

};

/* Larger screens get expanded layer control */
isCollapsed = (document.body.clientWidth <= 767) ? true : false;

//layer control
L.control.groupedLayers(baseLayers, groupedOverlays, {
    collapsed: isCollapsed,
    autoZIndex: true
}).addTo(map);



var sidebar = L.control.sidebar('sidebar').addTo(map);
