const EventEmitter = require('events');

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  speaks(msg) {
    console.log(`${this.name} says: ${msg}`);
  }
}

const bill = new Person('Bill');
const tom = new Person('Tom');

bill.on('says', bill.speaks);
tom.on('says', tom.speaks);

bill.emit('says', 'Hello, Tomi!');
tom.emit('says', 'Hello, Billi!');
