const http = require('http');
var fs = require('fs');
var path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 
 var filePath = '.' + req.url;
 if (filePath == './') {
     filePath = './index.html';
 }

 var extname = String(path.extname(filePath)).toLowerCase();
 var mimeTypes = {
     '.html': 'text/html',
     '.js': 'text/javascript',
     '.css': 'text/css',
     '.json': 'application/json',
     '.png': 'image/png',
     '.jpg': 'image/jpg',
     '.gif': 'image/gif',
     '.wav': 'audio/wav',
     '.mp4': 'video/mp4',
     '.woff': 'application/font-woff',
     '.ttf': 'application/font-ttf',
     '.eot': 'application/vnd.ms-fontobject',
     '.otf': 'application/font-otf',
     '.svg': 'application/image/svg+xml'
 };

 var contentType = mimeTypes[extname] || 'application/octet-stream';

fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf-8');
                });
            }
            else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                res.end();
            }
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });

  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });