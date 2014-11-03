var express = require('express');
var router = express.Router();
var url = require("url");
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function (req, res) {
	//res.redirect('/map/local/mayors_2012');return;
    res.render('maps/mayors_2012', {
        title: res.locals.site_title + ' - ' + 'Mayors 2012'
    });
});

/* GET About page. */
router.get('/about', function (req, res) {
    res.render('about', {
        title: res.locals.site_title + ' - ' + 'About the project'
    });
});

/* GET Integration page. */
router.get('/integration', function (req, res) {
	var maps = [];
	var settings = {
		"width" : 50,
		"height" : 50,
		"path": ''
	};
	
	if(typeof req.query.width != 'undefined' && req.query.width !=''){
		settings.width = parseInt(req.query.width);
	}
	if(typeof req.query.height != 'undefined' && req.query.height !=''){
		settings.height = parseInt(req.query.height);
	}
	if(typeof req.query.map != 'undefined' && req.query.map !=''){
		settings.path = req.protocol + '://' + req.get('host') + '/embed/' + req.query.map;;
	}

	fs.readdir('./views/embedded', function(err, files){
		if(err) throw err;
		files.forEach(function(file){
			var map = {};
		
			var filename = file.split('.')[0];
				//capitalize
				filename = filename.charAt(0).toUpperCase() + filename.substring(1);
				//convert "_" to " "
				filename = filename.replace('_', ' ');
			
			map.name = filename;
			map.value = new Buffer(file).toString('base64');
			
			maps.push(map);
		});
		
		res.render('integration', {
			title: res.locals.site_title + ' - ' + 'Integration',
			maps: maps,
			settings: settings
		});
	});
});

/* GET Feedback page. */
router.get('/feedback', function (req, res) {
	var file = JSON.parse(fs.readFileSync('./data/messages.json', 'utf8'));
	
    res.render('feedback', {
        title: res.locals.site_title + ' - ' + 'Feedback',
		messages: file.messages
    });
});

router.post('/feedback', function (req, res) {
	var name = req.body.name = req.sanitize(req.param('name'));
	var email = req.body.email = req.sanitize(req.param('email'));
	var content = req.body.content = req.sanitize(req.param('content'));
	var filepath = './data/messages.json';
	
	var file = JSON.parse(fs.readFileSync(filepath, 'utf8'));
	
	var message = { 
		"name": name, 
		"email": email, 
		"content": content 
	};
	
	file.messages.push(message);

	fs.writeFile( filepath, JSON.stringify(file, null, 4), function(err) {
		if(err) throw error;
	});
	
	res.redirect(res.locals.path + '/feedback');
});

module.exports = router;