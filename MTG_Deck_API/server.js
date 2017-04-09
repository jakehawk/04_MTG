var express 		= require('express'),
		app 				= express(),
		path				= require('path'),
		cors 				= require('cors'),
		logger 			= require('morgan'),
		mongoose 		= require('mongoose'),
		bodyParser 	= require('body-parser');

mongoose.connect('mongodb://localhost:27017/mtg-stuff-1');

var routes = require('./config/routes');

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

var port = process.env.PORT || 3000;

app.listen(port, 
	()=> console.log(`Live on port ${port}`)
);
