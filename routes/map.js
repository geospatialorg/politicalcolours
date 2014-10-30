var express = require('express');
var router = express.Router();

var config = require('../config/site');

router.get('/local', function (req, res) {
    res.render('map_local', {
		meta: config.meta,
        title: 'Localmap'
    });
});

router.get('/senate', function (req, res) {
    res.render('map_senate', {
		meta: config.meta,
        title: 'Senatemap'
    });
});

router.get('/chamber_of_deputies', function (req, res) {
    res.render('map_chamber_of_deputies', {
		meta: config.meta,
        title: 'Chamber of deputies map'
    });
});

module.exports = router;