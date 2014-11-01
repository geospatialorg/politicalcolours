var express = require('express');
var router = express.Router();

router.get('/local/county_councils_presidents_2012', function (req, res) {
    res.render('maps/county_councils_presidents_2012', {
        title: 'Presidents of the County Councils 2012'
    });
});

router.get('/local/mayors_2012', function (req, res) {
    res.render('maps/mayors_2012', {
        title: 'Mayors 2012'
    });
});

router.get('/local/mayors_2014_after_migration', function (req, res) {
    res.render('maps/mayors_2014_after_migration', {
        title: 'Mayors 2014 OUG 55/2014'
    });
});

router.get('/senate/senate_2008-2012', function (req, res) {
    res.render('maps/senate_2008-2012', {
        title: 'Senate 2008-2012'
    });
});

router.get('/senate/senate_2012-2016', function (req, res) {
    res.render('maps/senate_2012-2016', {
        title: 'Senate 2012-2016'
    });
});

router.get('/chamber_of_deputies/chamber_of_deputies_2008-2012', function (req, res) {
    res.render('maps/chamber_of_deputies_2008-2012', {
        title: 'Chamber of deputies 2008-2012'
    });
});

router.get('/chamber_of_deputies/chamber_of_deputies_2012-2016', function (req, res) {
    res.render('maps/chamber_of_deputies_2012-2016', {
        title: 'Chamber of deputies 2012-2016'
    });
});

/* GET Statistics page. */
router.get('/statistics/population_census_2011', function (req, res) {
    res.render('maps/population_census_2011', {
        title: 'Population Census 2011'
    });
});


router.get('/statistics/campaign_tracker_2014', function (req, res) {
    res.render('maps/campaign_tracker_2014', {
        title: 'Campaign Tracker 2014'
    });
});

router.get('/statistics/motorways', function (req, res) {
    res.render('maps/motorways', {
        title: 'motorways'
    });
});

module.exports = router;