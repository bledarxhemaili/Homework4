const EventEmitter = require('events');

function Person(name) {
  this.name = name;

  EventEmitter.call(this);

  this.speaks = function (msg) {
    console.log(`${this.name} says: ${msg}`);
  };
}

Person.prototype = Object.create(EventEmitter.prototype);

const bill = new Person('Bill');
const tom = new Person('Tom');

bill.on('says', bill.speaks);
tom.on('says', tom.speaks);

bill.emit('says', 'Hello, Tom!');
tom.emit('says', 'Hello, Bill!');
