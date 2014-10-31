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


function getColor(d) {
    return d === 0 ? '#FCFF1E' :
        d === 1 ? '#008080' :
        d === 2 ? '#32CD32' :
        d === 3 ? '#00FF00' :
        d === 4 ? '#0000FF' :
        d === 5 ? '#FF00FF' :
        d === 6 ? '#3299CC' :
        d === 7 ? '#007FFF' :
        d === 8 ? '#FF1CAE' :
        d === 9 ? '#4F2F4F' :
        d === 10 ? '#8E236B' :
        d === 11 ? '#DB9370' :
        d === 12 ? '#EBC79E' :
        d === 13 ? '#ADEAEA' :
        d === 14 ? '#CFB53B' :
        d === 15 ? '#FFA500' :
        d === 16 ? '#F16913' :
        d === 17 ? '#C0D9D9' :
        d === 18 ? '#D9D919' :
        d === 19 ? '#D8BFD8' :
        d === 20 ? '#8C7853' :
        d === 21 ? '#97694F' :
        d === 22 ? '#FF2400' :
        d === 23 ? '#5959AB' :
        d === 24 ? '#A63603' :
        d === 25 ? '#FF4F00' :
        d === 26 ? '#527F76' :
        d === 27 ? '#70DB93' :
        d === 28 ? '#E47833' :
        d === 29 ? '#9F5F9F' :
        d === 30 ? '#D19275' :
        d === 31 ? '#FFFF00' :
        d === 32 ? '#A67D3D' :
        d === 33 ? '#5F9F9F' :
        d === 34 ? '#B5A642' :
        d === 35 ? '#B87333' :
        d === 36 ? '#8E2323' :
        d === 37 ? '#2F4F2F' :
        d === 38 ? '#238E23' :
        d === 39 ? '#DBDB70' :
        d === 40 ? '#C0C0C0' :
        d === 41 ? '#6F4242' :
        d === 42 ? '#4E2F2F' :
        d === 43 ? '#7FFF00' :
        d === 44 ? '#8C1717' :
        d === 45 ? '#8E6B23' :
        d === 46 ? '#DB70DB' :
        d === 47 ? '#8FBC8F' :
        d === 48 ? '#BC8F8F' :
        d === 49 ? '#EAADEA' :
        d === 50 ? '#00FFFF' :
        d === 51 ? '#5C4033' :
        d === 52 ? '#CD7F32' :
        d === 53 ? '#4A766E' :
        d === 54 ? '#4F4F2F' :
        d === 55 ? '#9932CD' :
        d === 56 ? '#4D4DFF' :
        d === 57 ? '#642d67' :
        d === 58 ? '#7093DB' :
        d === 59 ? '#855E42' :
        d === 60 ? '#545454' :
        d === 61 ? '#FF0000' :
        d === 62 ? '#235c81' :
        d === 63 ? '#7F00FF' :
        d === 64 ? '#32CD99' :
        d === 65 ? '#3232CD' :
        d === 66 ? '#E9C2A6' :
        d === 67 ? '#93DB70' :
        d === 68 ? '#426F42' :
        d === 69 ? '#9370DB' :
        d === 70 ? '#236B8E' :
        d === 71 ? '#238E68' :
        d === 72 ? '#DB7093' :
        d === 73 ? '#A68064' :
        d === 74 ? '#2F2F4F' :
        d === 75 ? '#23238E' :
        d === 76 ? '#FF6EC7' :
        d === 77 ? '#CDCDCD' :
        d === 78 ? '#8F8FBD' :
        d === 79 ? '#5C4033' :
        d === 80 ? '#38B0DE' :
        d === 81 ? '#871F78' :
        d === 82 ? '#5C3317' :
        d === 83 ? '#42426F' :
        d === 84 ? '#6B238E' :
        d === 85 ? '#D98719' :
        d === 86 ? '#215E21' :
        d === 87 ? '#EAEAAE' :
        d === 88 ? '#70DBDB' :
        d === 89 ? '#6B4226' :
        d === 90 ? '#A8A8A8' :
        d === 91 ? '#CC3299' :
        d === 92 ? '#2F4F4F' :
        d === 93 ? '#99CC32' :
        d === 94 ? '#00FF7F' :
        d === 95 ? '#4169E1' :
        d === 96 ? '#856363' :
        d === 97 ? '#000000' :
        d === 98 ? '#00009C' :
        d === 99 ? '#6B8E23' :
        d === 999 ? '#E6E8FA' :
        '#E6E8FA';
}
