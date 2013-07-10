var express = require('express');
var fs = require('fs');
var file = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World2!');
//  var buff = fs.readFileSync(file, 'utf8');
//  response.write(	buff.toString('utf-8'));
  response.end();
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
