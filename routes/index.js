var express = require('express');
var router = express.Router();
var url = require("url");

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', {
		title: 'Express'
	});
});

/* GET maps. */
router.get('/map_local', function (req, res) {
	res.render('map_local', {
		title: 'Localmap'
	});
});

router.get('/map_senate', function (req, res) {
	res.render('map_senate', {
		title: 'Senatemap'
	});
});


/* Page not found - if the path is not defined in this file */
router.get('*', function (req, res) {
	res.render('404', {
		title: 'Page Not Found'
	});
});

module.exports = router;