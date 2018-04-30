var counter = function(arr){
    return "There are "+arr.length+" elements in this array";
}

//console.log(counter(["shaun", "crystal", "semen"])); go to app.js

//***need to say what variables will be visible in modules***//
/*require('./count'); in app.js
 console.log(counter(["shaun", "crystal", "semen"]));
 causes an error
 need to say what variables will be visible in modules
  */
module.exports = counter;//goes to app.js as required

