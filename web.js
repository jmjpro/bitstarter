var express = require('express');
var fs = require('fs');

//we could also read this directly into a string and avoid the buffer
var inputFileBuf = fs.readFileSync('index.html');
var inputString = inputFileBuf.toString('utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(inputString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
