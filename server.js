var express = require('express');
var path    = require('path');
var fs      = require('fs');

var app = express();

app.use(express.favicon());
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('*', function (req, res) {
  fs.readFile(
    path.join(__dirname, 'static', 'index.html'),
    function (err, data) {
      res.writeHead(200);
      res.end(data);
    }
  );
});

app.listen(8080);