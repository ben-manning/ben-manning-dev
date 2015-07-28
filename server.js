var express 		= require('express'),
		app 				= express(),
	  bodyParser 	= require('body-parser');

//=============== END OF BOILERPLATE ===================


// using bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public/stylesheets'));
app.use(express.static(__dirname + '/public/views'));


// app.use(express.static(__dirname + '/stylesheets'));
app.listen(process.env.PORT || 3000, function() { console.log('The server is listening.')});

//=============== END OF RUNNING SERVER ================


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


