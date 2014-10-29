var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Political Colours of Romania Reloaded' });
});

module.exports = router;
