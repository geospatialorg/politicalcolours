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
		settings.path = res.locals.embed_url + '/embed/' + req.query.map;;
	}

	fs.readdir('./views/maps', function(err, files){
		if(err) throw err;
		files.forEach(function(file){
			var map = {};
		
			var filename = file.split('.')[0];
				//capitalize
				filename = filename.charAt(0).toUpperCase() + filename.substring(1);
				//convert "_" to " "
				filename = filename.replace(new RegExp("_", "g"), ' ');
			
			map.name = filename;
			map.value = new Buffer(file.split('.')[0]).toString('base64');
			
			maps.push(map);
		});
		
		res.render('integration', {
			title: res.locals.site_title + ' - ' + 'Integration',
			maps: maps,
			settings: settings
		});
	});
});

router.get('/embed/:map', function (req, res) {
	var map = new Buffer(req.params.map, 'base64').toString('ascii');
	
    res.redirect(res.locals.path + '/map/' + map + "?embed=true");
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
	var d = new Date();
	
	function addLeadingZero(string){
		return "0" + string;
	}
	
	var month = d.getMonth() < 9 ? addLeadingZero(d.getMonth()) :  d.getMonth();
	var day = d.getDate() < 10 ? addLeadingZero(d.getDate()) :  d.getDate();
	var hour = d.getHours() < 10 ? addLeadingZero(d.getHours()) :  d.getHours();
	var minutes = d.getMinutes() < 10 ? addLeadingZero(d.getMinutes()) :  d.getMinutes();
	var seconds = d.getSeconds() < 10 ? addLeadingZero(d.getSeconds()) :  d.getSeconds();
	
	var timestamp = d.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
	
	var message = { 
		"name": name, 
		"email": email, 
		"content": content,
		"timestamp": timestamp
	};
	
	file.messages.push(message);

	fs.writeFile( filepath, JSON.stringify(file, null, 4), function(err) {
		if(err) throw error;
	});
	
	res.redirect(res.locals.path + '/feedback');
});

module.exports = router;