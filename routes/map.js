var express = require('express');
var router = express.Router();

function checkIfEmbeded(req, res, next){
	res.locals.embed = false;
	if(typeof req.query.embed != undefined && req.query.embed){
		res.locals.embed = true;
	}
	next();
}

router.get('/county_councils_presidents_2012', checkIfEmbeded,  function (req, res) {
    res.render('maps/county_councils_presidents_2012', {
        title: res.locals.site_title + ' - ' + 'Presidents of the County Councils 2012'
    });
});

router.get('/mayors_2012', checkIfEmbeded, function (req, res) {
    res.render('maps/mayors_2012', {
        title: 'Mayors 2012'
    });
});

router.get('/mayors_2014_after_migration', checkIfEmbeded, function (req, res) {
    res.render('maps/mayors_2014_after_migration', {
        title: res.locals.site_title + ' - ' + 'Mayors 2014 OUG 55/2014'
    });
});

router.get('/dna_activity_mayors', checkIfEmbeded, function (req, res) {
    res.render('maps/dna_activity_mayors', {
        title: res.locals.site_title + ' - ' + 'DNA Activity Mayors'
    });
});

router.get('/senate_2008-2012', checkIfEmbeded, function (req, res) {
    res.render('maps/senate_2008-2012', {
        title: res.locals.site_title + ' - ' + 'Senate 2008-2012'
    });
});

router.get('/senate_2012-2016', checkIfEmbeded, function (req, res) {
    res.render('maps/senate_2012-2016', {
        title: res.locals.site_title + ' - ' + 'Senate 2012-2016'
    });
});

router.get('/chamber_of_deputies_2008-2012', checkIfEmbeded, function (req, res) {
    res.render('maps/chamber_of_deputies_2008-2012', {
        title: res.locals.site_title + ' - ' + 'Chamber of deputies 2008-2012'
    });
});

router.get('/chamber_of_deputies_2012-2016', checkIfEmbeded, function (req, res) {
    res.render('maps/chamber_of_deputies_2012-2016', {
        title: res.locals.site_title + ' - ' + 'Chamber of deputies 2012-2016'
    });
});

/* GET Statistics page. */
router.get('/population_census_2011', checkIfEmbeded, function (req, res) {
    res.render('maps/population_census_2011', {
        title: res.locals.site_title + ' - ' + 'Population Census 2011'
    });
});


router.get('/campaign_tracker_2014', checkIfEmbeded, function (req, res) {
    res.render('maps/campaign_tracker_2014', {
        title: res.locals.site_title + ' - ' + 'Campaign Tracker 2014'
    });
});

router.get('/motorways', checkIfEmbeded, function (req, res) {
    res.render('maps/motorways', {
        title: res.locals.site_title + ' - ' + 'motorways'
    });
});

router.get('/presidential_elections_2014', checkIfEmbeded, function (req, res) {
    res.render('maps/presidential_elections_2014', {
        title: res.locals.site_title + ' - ' + 'Presidential Elections 2014'
    });
});

module.exports = router;