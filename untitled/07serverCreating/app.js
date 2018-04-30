var http = require('http');

var server = http.createServer(function (req, res) {//create server accepts func with 2 parameters req and res
    console.log('request was made: '+req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'}); // res header with status and content type
    res.end("Hey ninjas");//ending response and send to the browser/ sending info or data
});


///listening port///

server.listen(3000, '127.0.0.1');
console.log("listening port 3000");