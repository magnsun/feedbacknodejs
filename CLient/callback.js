const server = http.createServer((req, res) => {
    // Indstiller statuskoden til 200, hvilket betyder "OK"
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
