'use strict';

// Video 3 https://vimeo.com/200448971

// Integrierte Node.js-Module laden
const http = require('http'),
      path = require('path');
      
// Drittmodule laden (npm)
const express = require('express'),
      bodyParser = require('body-parser');

// Eigene .js-Dateien laden
const handle = require('./server/handle');
const logger = require('./server/logger');

// __dirname: Bezieht sich immer auf das Anwendungsverzeichnis
const clientDirectory = path.join(__dirname, 'client');

const app = express();

// Middleware /////////////////////////////////////////////////////

// Eigener Logger, schreibt Aufruf und Timestamp in Konsole
app.use(logger({ 
    level: 'debug',
    time: new Date()
}));

// Body-Parser-Middleware nutzen
app.use('/', bodyParser.json());

// Static-Middleware nutzen, um automatisch auf HTML-Dateien in ClientDirectory zu verlinken
app.use('/', express.static(clientDirectory));



// Routen //////////////////////////////////////////////////////////

// Post-Route definieren für "Articles", wenn über POST-Methode zugegriffen wird
app.post('/articles', (req,res) => {
    res.send(`Hallo ${req.body.user}`);
});

// Get-Route definieren für Root (/)
app.get('/', (req,res) => {
    res.send('Hallo Express!');
});

// Get-Route definieren für /mois
app.get('/mois', (req,res) => {
    res.send('Mois Diggi!');
});

// Get-Route definieren für /person (Array-Element senden)
app.get('/person', (req,res) => {
    const person = {
        firstname: 'Gög',
        lastName: 'Meier'
    };
    res.send(person);
});

// Get-Route definieren für /date (Parameter senden)
app.get('/date/:year?/:month?/:day?', (req,res) => {
    
    if (req.query.format === 'html'){
        return res.send(`<h1>${req.params.year}.${req.params.month}.${req.params.day}</h1>`);
    }
    
    const date = {
        year : req.params.year - 0,
        month : req.params.month - 0,
        day: req.params.day - 0 || 1
    };
    res.send(date);
});

// HTTP-Server erstellen.
// Express-Instanz wird zum Handlen übergeben
const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server gestartet.');
});

// Server mit eigenem Handle-Modul öffnen
//const server = http.createServer(handle);
//
//server.listen(3000, () => {
//    console.log('Port 3000 listening');
//});