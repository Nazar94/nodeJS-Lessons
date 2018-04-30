//readable stream-allow read data from the stream
//writable stream-allow write data to stream
//duplex-can read and write to a stream

var http = require('http');
var fs = require('fs');

var myReadStream =fs.createReadStream(__dirname + '/readMe.txt', 'utf8');//create stream set directory and file
//received data is called chunk  accepts function
myReadStream.on('data', function(chunk){//stream listening event called data
    console.log('new chunk received: '); //received data is called chink
    console.log(chunk);
});

