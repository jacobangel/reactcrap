var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var comments = [{author: 'Jacob Angel', text: 'Hoka-poke supa do!'}];

app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments.json', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(comments));
});

app.post('/comments.json', function (req, res) {
	comments.push(req.body);
	console.log(req.body);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(comments));
});

app.listen(3838);

console.log('Server is going strong at http://localhost:3838');