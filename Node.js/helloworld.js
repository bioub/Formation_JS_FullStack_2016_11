const http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Bonjour');
    res.end(' ! ');
});

server.listen(3000, function() {
    console.log('Le serveur a démarré');
});