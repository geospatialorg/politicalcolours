var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSanitizer = require('express-sanitizer');

/**
 * Init the APP
 */
var app = express();

/**
 * Routes
 */
var routes = require('./routes/index'),
	map = require('./routes/map'),
	missing = require('./routes/missing');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//TODO
// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/img/favicon.png'));

app.use(logger('dev'));
app.use(expressSanitizer());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/map', map);
// should remain last
app.use('*', missing);

// error handlers
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});

module.exports = app;
