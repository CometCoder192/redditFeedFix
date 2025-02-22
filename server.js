require('dotenv').config();
const http = require('http');

const API_CONFIG = JSON.stringify(
    {
        url1: process.env.URL1,
        url2: process.env.URL2
    }
)

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.url == '/config') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(API_CONFIG);
    } else {
        res.writeHead(400);
        res.end();
    }
})

server.listen(3000, ()=> {
    console.log("Server running at localhost 3000")
})