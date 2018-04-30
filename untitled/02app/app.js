
///***modules and require***///
//spliting our code to different modules
//require('./count'); need to initialize variable
var counter =require('./count');//var counter is reference to function
/*var counter = function(arr){
 return "There are "+arr.length+" elements in this array";
 }
 */

console.log(counter(["shaun", "crystal", "semen"]));

