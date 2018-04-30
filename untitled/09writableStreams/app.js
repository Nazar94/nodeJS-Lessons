//readable stream-allow read data from the stream
//writable stream-allow write data to stream
//duplex-can read and write to a stream

var http = require('http');
var fs = require('fs');

var myReadStream =fs.createReadStream(__dirname + '/readMe.txt', 'utf8');//create stream set directory and file
var myWriteStream =fs.createWriteStream(__dirname + '/writeMe.txt');//accepts directory with name of file that will be written

//received data is called chunk  accepts function
myReadStream.on('data', function(chunk){//stream listening event called data
    console.log('new chunk received: '); //received data is called chink
    myWriteStream.write(chunk);//write chunk of data to file
    console.log(chunk);
});

