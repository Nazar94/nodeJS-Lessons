var fs = require('fs');

//var readMe = fs.readFileSync('file.txt', 'utf8');//blocking code it shoud run and than code runs
var readMe = fs.readFile('file.txt', 'utf8', function (err, data) {
    console.log(data);
});//make the process asynchronous and add callback function for informiing about the process
//this is not blocking the code

console.log('test');
/*console.log(readMe);

fs.writeFileSync('writeMe.txt', readMe);
    */

//read file and write the ridden to a new file
/*
var readMe = fs.readFile('file.txt', 'utf8', function (err, data) {
    fs.writeFileSync('writeMe.txt', data);
});
*/

