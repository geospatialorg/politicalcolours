var express = require('express');
var router = express.Router();
var url = require("url");

/* Page not found - if the path is not defined in this file */
router.get('*', function (req, res) {
    res.render('404', {
        title: 'Page Not Found'
    });
});

module.exports = router;