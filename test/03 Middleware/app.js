'use strict';

const http = require('http'),
      path = require('path');

const bodyparser = require('body-parser'),
      express = require('express');

const app = express();

app.use(bodyparser.json());

app.use('/', express.static(path.join(__dirname, 'client')));

app.get('/articles', (req,res) => {
    res.send([
        {id:1, title:'fog'}
    ]);
});

const server = http.createServer(app);

server.listen(3000, () => {
    //
});