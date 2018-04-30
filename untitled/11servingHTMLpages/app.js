//readable stream-allow read data from the stream
//writable stream-allow write data to stream
//duplex-can read and write to a stream

var http = require('http');
var fs = require('fs');
/*
var myReadStream =fs.createReadStream(__dirname + '/readMe.txt', 'utf8');//create stream set directory and file
var myWriteStream =fs.createWriteStream(__dirname + '/writeMe.txt');//accepts directory with name of file that will be written
*/
//piping from readable stream to writable stream

//myReadStream.pipe(myWriteStream);//do the same thing that

/*myReadStream.on('data', function(chunk){//stream listening event called data
 console.log('new chunk received: '); //received data is called chink
 myWriteStream.write(chunk);//write chunk of data to file
 console.log(chunk);
 });
 */

var http = require('http');

var server = http.createServer(function (req, res) {//response object is a writable stream
    console.log('request was made: '+req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});//render as html file other way shows text from html file text/plain
    var myReadStream =fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);//pipping readed data to response

});

///listening port///

server.listen(3000, '127.0.0.1');
console.log("listening port 3000");

