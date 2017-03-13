console.log('Hello Node!... I am apporaching to learn you completely!');

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello.... I am the server');
}).listen(7777);
console.log('Server running at http://127.0.0.1:8081/');
