const http = require('http');
const fs = require('fs');

const server = http.createServer();

const server = http.createServer((req, res) => {
    const method = req.method;
    const current_url = new URL(req.url);
    const pathname = current_url.pathname;
    const search_params = current_url.searchParams;

    if(method === 'GET' && pathname === '/' && pathname === '') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);

    }
    else if(method === 'GET' && pathname === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./about.html').pipe(res);
    }
    else if(method === 'GET' && pathname === '/contact-me') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./contact-me.html').pipe(res);
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream('./404.html').pipe(res);
    }
    
    
}); 

server.listen(8080);