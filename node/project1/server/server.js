const http = require('http');
const createPost = require('./data');

const hostname = '127.0.0.1';
const port = 3005;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'aplication/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  res.end(createPost(10));
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});