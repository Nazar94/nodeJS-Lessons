
///***modules and require***///
//spliting our code to different modules
//require('./count'); need to initialize variable
//var counter =require('./stuff');//var counter is reference to function
/*var counter = function(arr){
 return "There are "+arr.length+" elements in this array";
 }
 */
var stuff =require('./stuff');

console.log(stuff.counter(["shaun", "crystal", "semen"]));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));

