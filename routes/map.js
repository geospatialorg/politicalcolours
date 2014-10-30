var express = require('express');
var router = express.Router();

router.get('/local', function (req, res) {
    res.render('map_local', {
        title: 'Localmap'
    });
});

router.get('/senate', function (req, res) {
    res.render('map_senate', {
        title: 'Senatemap'
    });
});

router.get('/chamber_of_deputies', function (req, res) {
    res.render('map_chamber_of_deputies', {
        title: 'Chamber of deputies map'
    });
});

module.exports = router;