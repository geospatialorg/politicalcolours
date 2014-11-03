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






var $maptooltip = $('.map-tooltip');
$maptooltip.html('<h4>Campaign tracker 2014</h4>Click for media/press release </br> or Hover over a marker</br>').show();

var geolayer = null;
var sliderControl = null;
$.getJSON(site_url + "data/centralizator.geojson", function (data) {
    var geolayer = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            var id = feature.properties.ID;
            //getColorCampaignTracker(id);
            return new L.CircleMarker(latlng, {
                radius: 10,
                fillColor: getColorCampaignTracker(id),
                color: "#555",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.9
            });
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.MEDIA);
            layer.feature.properties.time = moment(feature.properties.DATA).format("DD MMM YYYY");
            layer.on({
                mouseover: enterLayer,
                mouseout: leaveLayer
            });
        }
    });
    sliderControl = L.control.sliderControl({
        position: "topleft",
        layer: geolayer,
        range: false
    });
}).done(function () {

    map.addControl(sliderControl);
    sliderControl.startSlider();
});



function enterLayer() {
    var name = '<b>' + toTitleCase(this.feature.properties.NUME) + '</b>';
    var loc = '<b>' + toTitleCase(this.feature.properties.LOCALITATE) + '</b>';
    var data = '<b>' + toTitleCase(this.feature.properties.DATA) + '</b>';
    var eve = '<b>' + toTitleCase(this.feature.properties.EVENIMENT) + '</b>';
    var party_colour = '<div style="background-color:' + getColorCampaignTracker(this.feature.properties.ID) + '">&nbsp;</div>';



    $maptooltip.html('<h4>Campaign tracker 2014</h4>Click for media/press release </br> or Hover over a marker</br>' + name + '</br>' + loc + '</br>' + data + '</br>' + party_colour + eve).show();
    this.bringToFront();
    this.setStyle({
        weight: 3,
        opacity: 1,
        color: 'red'
    });
}

function leaveLayer() {
    //$maptooltip.hide();
    $maptooltip.html('<h4>Campaign tracker 2014</h4>Click for media/press release </br> or Hover over a marker</br>');
    this.bringToBack();
    this.setStyle({
        weight: 1,
        opacity: 1,
        color: '#555'
    });
}
