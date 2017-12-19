var express = require('express');
var cors = require("cors");
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


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

/*
io.sockets.on('connection',function(socket)
{
	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length);

	socket.on('disconnected', function(data)
	{
		connections.splice(connections.indexOf(socket),1);
		console.log('Disconnected: %s sockets connected', connections.length);
	});

});
*/


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);



  app.use('/', express.static(__dirname + '/www')); // redirect root
  app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
  app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
  app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
  app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
  app.use('/html', express.static(__dirname + '/node_modules/socket.io/lib/js')); // redirect CSS bootstrap

});