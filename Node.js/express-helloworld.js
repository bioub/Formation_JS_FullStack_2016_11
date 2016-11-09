const express = require('express');

var server = express();

server.get('/', function(req, res) {
    res.send('Bonjour !');
});

server.get('/toto', function(req, res) {
    res.send('Bonjour Toto !');
});

server.listen(3000, function () {
    console.log('Le serveur a démarré');
});