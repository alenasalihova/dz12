const http = require('http');
const {readFileSync} = require('fs');

const htmlHome = readFileSync('./page.html');
const htmlAbout = readFileSync('./about.html');
const img = readFileSync('./306165878.jpg');
const style = readFileSync('./style.css');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(htmlHome);
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(htmlAbout);
    } else if (req.url === '/306165878.jpg') {
        res.writeHead(200, {'content-type': 'image/jpeg'});
        res.end(img);
    } else if (req.url === '/style.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.end(style);
    } else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('page not found');
    }
});

server.listen(8000);