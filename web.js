var express = require('express');
var fs = require('fs');
var Buffer = require('buffer').Buffer;

var app = express.createServer(express.logger());


var readBuf = new Buffer(100); 
fs.readFileSync('index.html', readBuf, function (err, data) {
    if (err) throw err;
    //console.log(readBuf.toString('utf-8', 0, data));
    console.log(readBuf.toString);
});


app.get('/', function(request, response) {
  response.send(readBuf.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
