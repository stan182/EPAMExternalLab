// A
function Animal(name) {
  this.name = name;
  this.printName = function() {
  console.log(this.name);
  }
}

function Rabbit(name) {
  Animal.call(this, name);
}

var r = new Rabbit('Lucky');
r.printName(); // Should run without any errors and write 'Lucky'
console.log(Rabbit.prototype.hasOwnProperty('printName')) // Should be false

// B

var animal = {
  speed: 0
};

var mammal = {
  age: 3
};

mammal.__proto__ = Object.create(animal);

var rabbit = {
  name: 'Lucky'
};

rabbit.__proto__ = Object.create(mammal);

console.log(rabbit.age) // Should be '3'
console.log(rabbit.hasOwnProperty('age')) // Should be 'false' (also fix error)