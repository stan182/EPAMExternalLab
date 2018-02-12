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
	this.openDoors = 0;
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
	if (this.openDoors < this.doorsCount) {
		console.log(++this.openDoors);
  	} else {
		console.log(this.openDoors);
	}
};

Car.prototype.closeDoor = function() {
	if (this.openDoors > 1) {
		console.log(this.doorsCount - (--this.openDoors));
	} else {
		console.log(this.doorsCount - this.openDoors);
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
}
MonsterTruck.prototype = Object.create(Car.prototype);
MonsterTruck.prototype.constructor = MonsterTruck;

MonsterTruck.prototype.openDoor = function() {
	if (this.openDoors < this.doorsCount) {
		setTimeout(function() {
			console.log(++this.openDoors);
		}, 1000);
	} else {
		console.log(this.openDoors);
	}
};

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
console.log(mtruck.doorsCountnt);