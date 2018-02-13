function Vehicle(speed) {
	this.speed = speed || 0;
}

Vehicle.prototype.move = function() {
	this.speed += 1;
}

Vehicle.prototype.stop = function() {
	this.speed = 0;
}

Vehicle.prototype.toString = function() {
	return "Vechicle speed: " + this.speed;
}

Vehicle.prototype.valueOf = function() {
	return this.speed;
}

function Bike(wheelsCount) {
	Vehicle.apply(this);
	this.wheelsCount = wheelsCount || 2;
}
Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.move = function() {
	Vehicle.prototype.move.apply(this);
	console.log('Wrooooooom-Wroooooooom');
}

Bike.prototype.toString = function() {
	return "Bike speed: " + this.speed + "; have a wheels: " + this.wheelsCount;
}

Bike.prototype.valueOf = function() {
	return this.wheelsCount;
}

function Car(wheelsCount, doorsCount) {
	Vehicle.apply(this);
	this.wheelsCount = wheelsCount || 4;
	this.doorsCount = doorsCount || 4;
	this.openedDoors = 0;
	this.closedDoors = 0;
	this.carCount = 0;
	if (!Car.prototype.carCount) {
		Car.prototype.carCount = 1;
	} else {
		Car.prototype.carCount += 1;
	}
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.openDoor = function() {
	if (this.openedDoors < this.doorsCount) {
  	this.openedDoors++;
		console.log("Opened doors: " + this.openedDoors + "/" + this.doorsCount);
  	} else {
		console.log("Can't open the door! All doors: " + this.doorsCount);
	}
};

Car.prototype.closeDoor = function() {
	if (this.closedDoors < this.openedDoors) {
  	this.closedDoors++;
		console.log("Closed doors: " + this.closedDoors + "/" + this.openedDoors);
  	} else {
		console.log("Can't close the door! All opened doors: " + this.openedDoors);
	}
};

Car.prototype.toString = function() {
	return "Car speed: " + this.speed + "; have a wheels: " + this.wheelsCount + "; and have a doors: " + this.doorsCount;
}

Car.prototype.valueOf = function() {
	return this.doorsCount;
}

Car.prototype.getCarCount = function() {
	return Car.prototype.carCount;
}

function MonsterTruck (wheelsSize) {
	Car.apply(this);
	this.wheelsSize = wheelsSize || "BigFoot";
	var inheritOpenDoor = this.openDoor;
	var inheritCloseDoor = this.closeDoor;
  	this.openDoor = function() {
		setTimeout(inheritOpenDoor.bind(this), 1000);
	};
	this.closeDoor = function() {
		setTimeout(inheritCloseDoor.bind(this), 1000);
	};
}

MonsterTruck.prototype = Object.create(Car.prototype);
MonsterTruck.prototype.constructor = MonsterTruck;

MonsterTruck.prototype.toString = function() {
	return "MosterTruck speed: " + this.speed + "; have a wheels: " + this.wheelsCount + "; and have a doors: " + this.doorsCount; + "; wheelsSize: " + this.wheelsSize;
}

MonsterTruck.prototype.valueOf = function() {
	return this.wheelsSize;
}

var bike = new Bike();
var car = new Car();
var mtruck = new MonsterTruck();

console.log(bike.speed);
console.log(car.speed);
console.log(mtruck.speed);
console.log(mtruck.wheelsCount);
console.log(mtruck.doorsCount);