/*jslint browser: true*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $*/
/*global L*/
/*global getColor*/

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

    var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 100, 500, 1000, 5000, 10000, 25000, 50000],
        labels = [];
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColorCensus(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }
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
    layer.feature.properties.total = layerData[layer.feature.id].total;
    layer.feature.properties.valoare_feminin = parseInt(layerData[layer.feature.id].valoare_feminin);
    layer.feature.properties.valoare_masculin = parseInt(layerData[layer.feature.id].valoare_masculin);

    layer.setStyle({
        fillColor: getColorCensus(layer.feature.properties.total),
        fillOpacity: 0.9,
        color: '#555',
        weight: 1,
        opacity: 1
    });

    layer.on({
        mouseover: enterLayer,
        mouseout: leaveLayer
    });
}


var $maptooltip = $('.map-tooltip');
$maptooltip.html('<h4>Population census 2011</h4>Hover over a municipality').show();

function enterLayer() {
    var name = 'Municipality of <b>' + this.feature.properties.name + '</b>';
    var total = 'Total population <b>' + this.feature.properties.total + '</b>';
    var judet = '<b>' + this.feature.properties.jud_lbl + ' County</b>';
    var male = 'Female population <b>' + this.feature.properties.valoare_feminin + '</b>';
    var female = 'Male population <b>' + this.feature.properties.valoare_masculin + '</b>';
    var colour = '<div style="background-color:' + getColorCensus(this.feature.properties.total) + '">&nbsp;</div>';


    $maptooltip.html('<h4>Population census 2011</h4>' + name + '</br>' + judet + '</br>' + total + '</br>' + female + '</br>' + male + '</br>' + colour).show();
    this.bringToFront();
    this.setStyle({
        weight: 3,
        opacity: 1,
        color: '#4daf4a'
    });
}

function leaveLayer() {
    //$maptooltip.hide();
    $maptooltip.html('<h4>Population census 2011</h4>Hover over a municipality');
    this.bringToBack();
    this.setStyle({
        weight: 1,
        opacity: 1,
        color: '#555'
    });
}

function loadData() {
    $.ajax({
        type: "GET",
        url: site_url + "data/populatie_stabila_2012.csv",
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
