const http = require('http');
var fs = require('fs');
var path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  res.on('error', (err) => {
    console.error(err);
  });

  var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

  if (req.method === 'GET' && req.url === '/login') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Food With Friends\nPlease Log In');
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

