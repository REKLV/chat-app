const express = require('express');

const app = express();

const cors = require('cors');

const server = app.listen(4000, function()
{
	console.log('port 4000 is being listened to right now')
});

app.use(cors());

app.get('/', (req, res) =>  res.send('Hello World!'))



