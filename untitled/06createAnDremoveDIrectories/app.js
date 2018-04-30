var fs = require('fs');

//fs.unlink('writeMe.txt'); deleting file
/*
fs.mkdirSync('stuff');//creating directory
fs.rmdirSync('stuff');//deleting directory
*/

//make asynchronously
/*
fs.mkdir('stuff', function () {//create directory
    fs.readFile('file.txt', 'utf8', function (err, data) {//read file
        fs.writeFile('./stuff/writeMe.txt', data);//create new file in directory
    });
});
*/

//removing directory

//fs.rmdir('stuff');//can`t remove directory if it is not empty
fs.unlink('./stuff/writeMe.txt', function () {
    fs.rmdir('stuff');
});
