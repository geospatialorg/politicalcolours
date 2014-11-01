var express = require('express');
var router = express.Router();

var config = require('../config/site');

router.get('/local', function (req, res) {
    res.render('maps/map_local', {
		meta: config.meta,
        title: 'Localmap'
    });
});

router.get('/local/county_councils_presidents_2012', function (req, res) {
    res.render('maps/county_councils_presidents_2012', {
		meta: config.meta,
        title: 'Presidents of the County Councils 2012'
    });
});

router.get('/local/mayors_2012', function (req, res) {
    res.render('maps/mayors_2012', {
		meta: config.meta,
        title: 'Mayors 2012'
    });
});

router.get('/local/mayors_2014_after_migration', function (req, res) {
    res.render('maps/mayors_2014_after_migration', {
		meta: config.meta,
        title: 'Mayors 2014 after migration'
    });
});

router.get('/local/senate_actualized', function (req, res) {
    res.render('maps/senate_actualized', {
		meta: config.meta,
        title: 'Senate map actualized'
    });
});

router.get('/senate', function (req, res) {
    res.render('maps/map_senate', {
		meta: config.meta,
        title: 'Senatemap'
    });
});

router.get('/chamber_of_deputies', function (req, res) {
    res.render('maps/map_chamber_of_deputies', {
		meta: config.meta,
        title: 'Chamber of deputies map'
    });
});

module.exports = router;