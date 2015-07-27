var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//=============== END OF BOILERPLATE ===================


// using bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000, function() { console.log('listening')});

//=============== END OF RUNNING SERVER ================


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


