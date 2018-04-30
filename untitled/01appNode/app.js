//global
/*
console.log("Message");

setTimeout(function () {
    console.log("3 seconds have passed");
},3000);

var time =0;

var timer = setInterval(function () {
    time+=2;
    console.log(time+" seconds have passed");
    if(time>5){
        clearInterval(timer);
    }
},2000);

console.log(__dirname);//say us in what dir we are
console.log(__filename);//say us what file is used
*/
//**function expressions**////
//normal function statement
function sayHi() {
    console.log("Hi");
}

sayHi();

//function expressions//
var sayBye =function() {
    console.log("Bye");
};

sayBye();

//passing function from one to another

function callFunction(func) {
    func();
}

callFunction(sayBye);//passing variable sayBye to function callFunction

///***modules and require***///

//spliting our code to different modules