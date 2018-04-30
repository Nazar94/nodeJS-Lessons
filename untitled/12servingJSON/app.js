

var http = require('http');
var fs = require('fs');


var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('request was made: '+req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    //creating obj
    var myObj={
        name: 'Semen',
        job: 'Ninja',
        age: 23
    };

    res.end(JSON.stringify(myObj));//sending data back to the client end()-expects string or a buffer
    //JSON.stringify()-conver to json serialize
});

///listening port///

server.listen(3000, '127.0.0.1');
console.log("listening port 3000");

