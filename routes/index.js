var express = require('express');
var router = express.Router();
var url = require("url");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Political Colours of Romania Reloaded'
    });
});

/* GET About page. */
router.get('/about', function (req, res) {
    res.render('about', {
        title: 'About the project'
    });
});

/* GET Integration page. */
router.get('/integration', function (req, res) {
    res.render('integration', {
        title: 'Integration'
    });
});

/* GET Collaborators page. */
router.get('/collaborators', function (req, res) {
    res.render('collaborators', {
        title: 'Collaborators and Data Sources'
    });
});

/* GET Feedback page. */
router.get('/feedback', function (req, res) {
    res.render('feedback', {
        title: 'Feedback'
    });
});

/* GET Statistics page. */
router.get('/statistics', function (req, res) {
    res.render('statistics', {
        title: 'Statistics'
    });
});

module.exports = router;