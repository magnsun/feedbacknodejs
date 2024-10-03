var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    console.log('Request Received');

    res.writeHead(200, {
        'Context-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });

    req.on('data', function (chunk) {
        var rstream = fs.createReadStream(JSON.parse(chund));
        var wstream = fs.createWriteStream('info.txt');
        rstream.pipe(wstream);
        str += chunk;
        console.log('GOT DATA');
    });


    res.end('{"msg": "OK"}');
}).listen(4560, '127.0.0.1');
console.log('Server running at http://127.0.0.1:4560/');
