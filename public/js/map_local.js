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
    zoomControl: true,
    attributionControl: true,
    maxZoom: 16,
    minZoom: 7,
    maxBounds: new L.LatLngBounds(southB, northB)
});


L.TopoJSON = L.GeoJSON.extend({
    addData: function (jsonData) {
        if (jsonData.type === "Topology") {
            for (key in jsonData.objects) {
                geojson = topojson.feature(jsonData, jsonData.objects[key]);
                L.GeoJSON.prototype.addData.call(this, geojson);
            }
        } else {
            L.GeoJSON.prototype.addData.call(this, jsonData);
        }
    }
});
var colorScale = chroma
    .scale(['#D5E3FF', '#003171'])
    .domain([0, 1]);

var fillColor = colorScale(0.25).hex();

var topoLayer = new L.TopoJSON();
var layerData;


function addTopoData(topoData) {
    topoLayer.addData(topoData);
    topoLayer.addTo(map);
    topoLayer.eachLayer(handleLayer);
}


function handleLayer(layer) {
    var randomValue = Math.random(),
        fillColor = colorScale(randomValue).hex();
    layer.feature.properties.primar = layerData[layer.feature.id].primar;
    layer.feature.properties.id_partid = layerData[layer.feature.id].id_partid;
    layer.feature.properties.partid = layerData[layer.feature.id].partid;

    layer.setStyle({
        fillColor: getColor(layer.feature.properties.id_partid),
        fillOpacity: 1,
        color: '#555',
        weight: 0.5,
        dashArray: '2s',
        opacity: 1
    });

    layer.on({
        mouseover: enterLayer,
        mouseout: leaveLayer
    });
}


var $maptooltip = $('.map-tooltip');

function enterLayer() {
    var name = this.feature.properties.name;
    var primar = this.feature.properties.primar;
    var partid = this.feature.properties.partid;
    $maptooltip.html(name + '</br>' + primar + '</br>' + partid).show();
    this.bringToFront();
    this.setStyle({
        weight: 2,
        opacity: 1,
        color: 'red'
    });
}

function leaveLayer() {
    $maptooltip.hide();
    this.bringToBack();
    this.setStyle({
        weight: 1,
        opacity: .5,
        color: '#555'
    });
}

// Grab the spreadsheet of data as JSON. If you have CSV
// data, you should convert it to JSON with
// http://shancarter.github.io/mr-data-converter/
function loadData() {
    $.getJSON('../data/primari2012.json')
        .done(function (data) {
            layerData = data;

            $.getJSON('../data/gis/ro_uat.topojson').done(function (geodata) {
                addTopoData(geodata);
            });
        });
}
loadData();
