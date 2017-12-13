const handle = function(req, res) {
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.write('Hallo modulares HTTP!' + req.method + req.url);
    res.end();
};
module.exports = handle;