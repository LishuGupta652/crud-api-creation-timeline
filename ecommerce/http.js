const http = require('http');

const hostname = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plane'})
    res.write("This is the http server");
    res.end();
}).listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`);
})    