/*
var counter = function(arr){

    return "There are "+arr.length+" elements in this array";
};

var adder = function (a,b) {
    return `The sum of the 2 numbers is ${a+b}`;//``-allows add variables without concat to string
};

var pi=3.142;

//module.exports= counter; need to add all properties
module.exports.counter = counter;//goes to app.js as required
module.exports.adder = adder;//export different properties
module.exports.pi = pi;

*/
//declare exported variables in functions
/*
module.exports.counter  = function(arr){
    return "There are "+arr.length+" elements in this array";
};

module.exports.adder = function (a,b) {
    return `The sum of the 2 numbers is ${a+b}`;//``-allows add variables without concat to string
};

module.exports.pi=3.142;

*/

var counter = function(arr){

    return "There are "+arr.length+" elements in this array";
};

var adder = function (a,b) {
    return `The sum of the 2 numbers is ${a+b}`;//``-allows add variables without concat to string
};

var pi=3.142;

//module.exports= counter; need to add all properties
module.exports ={
    counter: counter,
    adder: adder,
    pi: pi
};