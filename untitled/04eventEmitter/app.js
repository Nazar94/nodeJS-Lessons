
///***event emitter***///

var events =require('events');
/* example like in js event emitter
element.on('click', function () {
    
})
*/
/*
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function (mssg) {
    console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emmited');
    */

//**util module **//
var util = require('util');

var Person = function (name) {
    this.name = name;
};

    //inherit event emitter//
util.inherits(Person, events.eventEmitter);

var james = new Person('james');
var semen = new Person('semen');
var ivan = new Person('ivan');

var people = [james, semen, ivan];

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(person.name+ ' said: '+mssg);
    });
});

james.emit('speak', 'Hi, james is me');
james.semen('speak', 'Hi, semen is me');
james.ivan('speak', 'Hi, ivan is me');
