var express = require('express');
var router = express.Router();
var url = require("url");

var config = require('../config/site');

/* GET home page. */
router.get('/', function (req, res) {
	res.redirect('/map/local');return;
    res.render('index', {
		meta: config.meta,
        title: 'Political Colours of Romania Reloaded'
    });
});

/* GET About page. */
router.get('/about', function (req, res) {
    res.render('about', {
		meta: config.meta,
        title: 'About the project'
    });
});

/* GET Integration page. */
router.get('/integration', function (req, res) {
    res.render('integration', {
		meta: config.meta,
        title: 'Integration'
    });
});

/* GET Collaborators page. */
router.get('/collaborators', function (req, res) {
    res.render('collaborators', {
		meta: config.meta,
        title: 'Collaborators and Data Sources'
    });
});

/* GET Feedback page. */
router.get('/feedback', function (req, res) {
    res.render('feedback', {
		meta: config.meta,
        title: 'Feedback'
    });
});

/* GET Statistics page. */
router.get('/statistics', function (req, res) {
    res.render('statistics', {
		meta: config.meta,
        title: 'Statistics'
    });
});

module.exports = router;