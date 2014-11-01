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

L.TopoJSON = L.GeoJSON.extend({
    addData: function (jsonData) {
        'use strict';
        if (jsonData.type === "Topology") {
            for (var key in jsonData.objects) {
                var geojson = topojson.feature(jsonData, jsonData.objects[key]);
                L.GeoJSON.prototype.addData.call(this, geojson);
            }
        } else {
            L.GeoJSON.prototype.addData.call(this, jsonData);
        }
    }
});

var topoLayer = new L.TopoJSON();
var layerData = {};


function addTopoData(topoData) {
    topoLayer.addData(topoData);
    topoLayer.addTo(map);
    topoLayer.eachLayer(handleLayer);
}


function handleLayer(layer) {
    console.log(layer.feature.id);
    layer.feature.properties.nume = layerData[layer.feature.id].nume;
    layer.feature.properties.id_partid = parseInt(layerData[layer.feature.id].id_partid);

    layer.setStyle({
        fillColor: getColor(layer.feature.properties.id_partid),
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
$maptooltip.html('<h4>Senate 2012-2016</h4>Hover over a uninominal college').show();

function enterLayer() {
    var presedinte = 'Senator <b>' + toTitleCase(this.feature.properties.nume) + '</b>';
    var judet = '<b>' + this.feature.properties.name + ' County College ' + this.feature.id + '</b>';
    var partid = getName(this.feature.properties.id_partid);
    var party_colour = '<div style="background-color:' + getColor(this.feature.properties.id_partid) + '">&nbsp;</div>';


    $maptooltip.html('<h4>Senate 2012-2016</h4>' + judet + '</br>' + presedinte + '</br>' + party_colour + partid).show();
    this.bringToFront();
    this.setStyle({
        weight: 3,
        opacity: 1,
        color: 'red'
    });
}

function leaveLayer() {
    //$maptooltip.hide();
    $maptooltip.html('<h4>Senate 2012-2016</h4>Hover over a uninominal college');
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
        url: "../../data/senatori_2014.csv",
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
                    layerData[inCSV[key].colsen_code] = inCSV[key];
                }
            }
            $.getJSON('../../data/gis/ro_colsen.topojson').done(function (geodata) {
                addTopoData(geodata);
            });
        }
    });
}
loadData();
