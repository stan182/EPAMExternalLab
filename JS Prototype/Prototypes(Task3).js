function Vehicle(speed) {
	this.speed = speed || 0;
	this.move = function() {
		this.speed += 1;
	};
	this.stop = function() {
		this.speed = 0;
	};
	this.toString = function() {
		return "Vechicle speed: " + this.speed;
	};
	this.valueOf = function() {
		return this.speed;
	};
}

function Bike(wheelsCount) {
	Vehicle.call(this)
	this.wheelsCount = 2;
	var sound = this.sound;
	this.sound = function() {
		sound.apply(this);
		console.log('Wrooooooom-Wroooooooom');
	};
	this.toString = function() {
		return "Bike speed: " + this.speed + "; have a wheels: " + this.wheelsCount;
	};
	this.valueOf = function() {
		return this.wheelsCount;
	};
}

function Car(wheelsCount, doorsCount) {
	Vehicle.call(this)
	this.wheelsCount = wheelsCount || 4;
	this.doorsCount = doorsCount || 4;
	this.openedDoors = 0;
	Car.carCount += 1;
		if (this.openedDoors === this.doorsCount && this.openedDoors > 0) {
			console.log("Can't open the door");
		} else {
			this.openedDoors += 1;
			console.log("Opened doors: " + this.openedDoors);
		}
		if (this.openedDoors === 0) {
			console.log("Can't close the door");
		} else {
			this.openedDoors -= 1;
			this.closedDoors += 1;
			console.log("Closed doors: " + this.closedDoors);
		}
	this.toString = function() {
		return "Car speed: " + this.speed + "; have a wheels: " + this.wheelsCount + "; and have a doors: " + this.doorsCount;
	};
	this.valueOf = function() {
		return this.doorsCount;
	};
	Car.carCount = 0;
	Car.getCarCount = function() {
		return Car.carCount;
	};
}

function MonsterTruck(wheelsSize) {
	Car.call(this)
	this.wheelsSize = wheelsSize || "BigFoot";
	var CARopenDoors = this.openedDoors;
	this.openDoor = function() {
		setTimeout(CARopenDoors.bind(this), 1000);
	};
	var CARcloseDoors = this.closedDoors;
	this.closeDoor = function() {
		setTimeout(CARcloseDoors.bind(this), 1000);
	};
	this.toString = function() {
		return "MosterTruck speed: " + this.speed + "; have a wheels: " + this.wheelsCount + "; and have a doors: " + this.doorsCount; + "; wheelsSize: " + this.wheelsSize;
	};
	this.valueOf = function() {
		return this.wheelsSize;
	};
}