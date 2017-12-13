const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.write('Hallo HTTP!' + req.method + req.url);
    res.end();
});

server.listen(3000, () => {
    console.log('Port 3000 listening');
});