var express = require('express');
var fs = require('fs');
/*var buf = require('buf');*/

var app = express.createServer(express.logger());

fs.readFileSync('/home/doclumbri666/node-startup/index.html', 'utf-8', function (err, data) {
   if (err) throw err;
    console.log(data);
    response.send(data);
});

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
