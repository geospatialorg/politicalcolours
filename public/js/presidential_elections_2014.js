/*jslint browser: true*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $*/
/*global L*/
/*global getColorPE2014*/

var map;
var northB = [51.26, 34.71];
var southB = [40.61, 15.26];

/* Basemap Layers */
var mapquestOSM = L.tileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
    maxZoom: 16,
    subdomains: ["otile1", "otile2", "otile3", "otile4"],
    //bounds: new L.LatLngBounds(southB, northB),
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
    minZoom: 6,
    zoomAnimation: false,
    maxBounds: new L.LatLngBounds(southB, northB)
});
if (L.Browser.touch) {
    L.control.touchHover().addTo(map);
}

var legend = L.control({
    position: 'bottomright'
});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<i style="background:' + getColorPE2014(1) + '"></i> Klaus Iohannis (PNL)<br>';
    div.innerHTML += '<i style="background:' + getColorPE2014(2) + ' "></i> Victor Ponta (PSD)';

    return div;
};

legend.addTo(map);


var topoLayer = new L.TopoJSON();
var layerData = {};


function addTopoData(topoData) {
    topoLayer.addData(topoData);
    topoLayer.addTo(map);
    topoLayer.eachLayer(handleLayer);
}


function handleLayer(layer) {
    layer.feature.properties.total_voturi = parseInt(layerData[layer.feature.id].total_voturi);
    layer.feature.properties.castigator = parseInt(layerData[layer.feature.id].castigator);
    layer.feature.properties.procent_iohannis = layerData[layer.feature.id].procent_iohannis;
    layer.feature.properties.procent_ponta = layerData[layer.feature.id].procent_ponta;
    layer.feature.properties.uat_lbl = layerData[layer.feature.id].uat_lbl;

    layer.setStyle({
        fillColor: getColorPE2014(layer.feature.properties.castigator),
        fillOpacity: 0.9,
        color: '#969696',
        weight: 1,
        opacity: 1
    });

    layer.on({
        mouseover: enterLayer,
        mouseout: leaveLayer
    });
}


var $maptooltip = $('.map-tooltip');
$maptooltip.html('<h4>Presidential election, 2014</h4>Hover over a municipality').show();

function enterLayer() {
    var name = 'Municipality of <b>' + this.feature.properties.uat_lbl + '</b>';
    var total = 'Voturi valabil exprimate <b>' + this.feature.properties.total_voturi + '</b>';
    var judet = '<b>' + this.feature.properties.jud_lbl + ' County</b>';
    var Klaus = 'Klaus Iohannis (PNL) <b>' + this.feature.properties.procent_iohannis + '&#37;</b>';
    var Ponta = 'Victor Ponta (PSD) <b>' + this.feature.properties.procent_ponta + '&#37;</b>';
    var colour = '<div style="background-color:' + getColorPE2014(this.feature.properties.castigator) + '">&nbsp;</div>';


    $maptooltip.html('<h4>Presidential election, 2014</h4>' + name + '</br>' + judet + '</br>' + total + '</br>' + Klaus + '</br>' + Ponta + '</br>' + colour).show();
    this.bringToFront();
    this.setStyle({
        weight: 3,
        opacity: 1,
        color: '#4daf4a'
    });
}

function leaveLayer() {
    //$maptooltip.hide();
    $maptooltip.html('<h4>Presidential election, 2014</h4>Hover over a municipality');
    this.bringToBack();
    this.setStyle({
        weight: 1,
        opacity: 1,
        color: '#969696'
    });
}

function loadData() {
    $.ajax({
        type: "GET",
        url: site_url + "data/rezultate_prezidentiale_2014.csv",
        dataType: "text",
        success: function (data) {
            var inCSV = $.csv.toObjects(data, {
                separator: ',',
                delimiter: '|',
                headers: true
            });
            //convert to dict JSON
            for (var key in inCSV) {
                if (inCSV.hasOwnProperty(key)) {
                    layerData[inCSV[key].siruta] = inCSV[key];
                }
            }
            $.getJSON(site_url + 'data/gis/ro_uat.topojson').done(function (geodata) {
                addTopoData(geodata);
            });
        }
    });
}
loadData();
