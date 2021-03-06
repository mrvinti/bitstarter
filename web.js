var express = require('express');
var fs = require('fs');
var buffer = require('buffer').Buffer;

var app = express.createServer(express.logger());


var readBuf = new buffer(100); 
readBuf = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(readBuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
