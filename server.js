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
  // login route
    if (req.method === 'GET' && req.url === '/login') {
      console.log("Req to login");
      fs.readFile('./login.html', function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            }else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                res.end();
            }
        }else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(content, 'utf-8');
            res.end();
        }
      });
    }
  });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

