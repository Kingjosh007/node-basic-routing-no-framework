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
    
    
}); 

server.listen(8080);