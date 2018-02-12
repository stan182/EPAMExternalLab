function Vehicle(speed) {
 this.speed = speed || 0;
}

function Bike(wheelsCount) {
 Vehicle.apply(this);
 this.wheelsCount = wheelsCount || 2;
}
Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

function Car(wheelsCount, doorsCount) {
  Vehicle.apply(this);
 this.wheelsCount = wheelsCount || 4;
 this.doorsCount = doorsCount || 4;
 this.openedDoors = 0;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function MonsterTruck (wheelsSize) {
  Car.apply(this);
 this.wheelsSize = wheelsSize || "BigFoot";
}
MonsterTruck.prototype = Object.create(Car.prototype);
MonsterTruck.prototype.constructor = MonsterTruck;

var bike = new Bike();
var car = new Car();
var mtruck = new MonsterTruck();

console.log(bike.speed);
console.log(car.speed);
console.log(mtruck.speed);
console.log(mtruck.wheelsCount);
console.log(mtruck.doorsCount);