const http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Bonjour !');
            break;
        case '/toto':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Bonjour Toto !');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Erreur 404');
    }

});

server.listen(3000, function () {
    console.log('Le serveur a démarré');
});