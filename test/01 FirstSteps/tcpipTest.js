const net = require('net');

const server = net.createServer((socket) => {
    //res.writeHead(200, {
    //    'content-type': 'text/html'
    //});
    socket.write('Hallo TCPIP!');
    socket.end();
});

server.listen(3000, () => {
    console.log('Port 3000 listening');
});