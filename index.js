const http = require('http');
const {readFileSync} = require('fs');

const htmlHome = readFileSync('./page.html');
const htmlAbout = readFileSync('./about.html');
const img = readFileSync('./306165878.jpg');
const style = readFileSync('./style.css');

const server = http.createServer((req, res) => {
    
    get('/', () => {
        headers(200, 'text/html');
        res.end(htmlHome);
    });
    get('/about', () => {
        headers(200, 'text/html');
        res.end(htmlAbout);
    });
    get('/306165878.jpg', () => {
        headers(200, 'image/jpeg');
        res.end(img);
    });
    get('/style.css', () => {
        headers(200, 'text/css');
        res.end(style);
    });

    function headers (code, type) {
        res.writeHead(code, { 'content-type': type});
    }
    function get(url, callback) {
        if (req.url === url) {
          callback();
        }
    }
});

server.listen(8000);


  /*  if (req.url === '/') {
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
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('page not found');
    } */
