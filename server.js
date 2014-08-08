var express = require('express');
var app = express();

var comments = [{author: 'Jacob Angel', text: 'Hey there!'}];

app.use('/', express.static(__dirname));
app.listen(3838);

console.log('Server is going strong at http://localhost:3838');