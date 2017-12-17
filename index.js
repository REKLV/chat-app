var express = require('express');
var cors = require("cors");
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var users = ["Joe","Luke","Rewaz","Stefan"];

var data = 


app.locals.users = users;

/*app.use(function(req,res,next)
{
	console.log(`${req.method} request for '${req.url}'`);
});*/



app.use(cors());

app.use(express.static("./main"))

app.get('/', function (req, res) {
		res.sendFile(__dirname + '/index.html');
  });



app.get('/data-api', function (req, res) {
		res.json(users);
  });


var server = app.listen(8000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});