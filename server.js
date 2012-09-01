var mojito = require('mojito');
var express = require('express');

var url = "mongodb://paul:vHxCMolX@alex.mongohq.com:10032/bible-playlist";
var collections = ["users", "verses", "topics", "playlist"];
var db = require('mongojs').connect(url, collections);

var app = express();
app.get('/', function(request, response) {
  response.send('Setting up the environment for Bible Playlist');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

