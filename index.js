const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { method } = req;

    // const searchParams = currentUrl.searchParams;

  if (method === 'GET' && (req.url === '/' || req.url === '')) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./index.html').pipe(res);
  } else if (method === 'GET' && req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./about.html').pipe(res);
  } else if (method === 'GET' && req.url === '/contact-me') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream('./contact-me.html').pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    fs.createReadStream('./404.html').pipe(res);
  }
});

server.listen(8080);
