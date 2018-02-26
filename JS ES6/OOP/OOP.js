// Vechicle

class Vehical {
  constructor (){
    this.speed = 0;
  }
  
  move(){
    this.speed++;
    console.log(this.speed);
  }
  
  stop(){
    this.speed = 0;
    console.log(this.speed);
  }
  
  toString(){
  	let vechicleParam = this.speed;
    return `Vechicle speed: ${this.speed}`;
  }
  
  valueOf(){
    return this.speed;
  }
}

console.log("BIKE");

class Bike extends Vehical {
  constructor() {
  	super();
    this.wheelsCount = 2;
  }
  
  move(){
    this.speed++;
    console.log("Wrooooooom-Wroooooooom Speed: "+this.speed)
  }
  stop(){
    this.speed = 0;
    console.log("Stop, speed: " + this.speed)
  }
  toString(){
    let bikeParam = `speed: ${this.speed} wheelsCount: ${this.wheelsCount}`;
    return bikeParam;
  }
  valueOf(){
    return this.wheelsCount;
  }

}

let bike = new Bike();
bike.move();
bike.move();
bike.move();
bike.stop();
console.log(bike.toString());
console.log(bike.valueOf());

console.log("CAR")

class Car extends Vehical {
  constructor(){
    super();
    this.wheelsCount = 4;
    this.doorsCount = 4;
    this.openedDoors = 0;
    this.closedDoors = 0;
    Car.count++;
  }
  
  openDoor(){
	if (this.openedDoors < this.doorsCount) {
  	this.openedDoors++;
		console.log("Opened doors: " + this.openedDoors + "/" + this.doorsCount);
  	} else {
		console.log("Can't open the door! All doors: " + this.doorsCount);
	}
  }
  closeDoor(){
	if (this.closedDoors < this.openedDoors) {
  	this.closedDoors++;
		console.log("Closed doors: " + this.closedDoors + "/" + this.openedDoors);
  	} else {
		console.log("Can't close the door! All opened doors: " + this.openedDoors);
	}
  }
  howMuchCarCreated(){
    console.log(`Has been created ${Car.count} cars`)
  }

  toString(){
    let carParam = `speed: ${this.speed}, wheelsCount: ${this.wheelsCount}, doorsCount: ${this.doorsCount}, openedDoors: ${this.openedDoors}, closedDoors: ${this.closedDoors}`;
    return carParam;  
  }
  valueOf(){
    return this.doorsCount;
  }
}

Car.count = 0;
let car = new Car();
let car1 = new Car();
let car2 = new Car();
car.howMuchCarCreated();
console.log(car.toString());
console.log(car.valueOf());
car.openDoor();
car.openDoor();
car.openDoor();
car.openDoor();
car.openDoor();
car.closeDoor();
car.closeDoor();
car.closeDoor();
car.closeDoor();
car.closeDoor();


console.log("MONSTER TRUCK");

class MonsterTruck extends Vehical{
  constructor(){
    super();
    this.wheelSize = "BigFoot";
    this.wheelsCount = 4;
    this.doorsCount = 4;
    this.openedDoors = 0;
    this.closedDoors = 0;
  }

  openDoor(){
    setTimeout(Car.prototype.openDoor.bind(this), 1000);
  }

  toString(){
    let mtParam = "speed: " + this.speed + ", wheelsCount: " + this.wheelsCount +
     ", doorsCount: " + this.doorsCount + ", openedDoors: " + this.openedDoors +
      ", closedDoors: " + this.closedDoors + ", wheelSize: " + this.wheelSize;
    return mtParam;
  }
  
  valueOf(){
    return this.wheelSize;
  }
}

let MTruck = new MonsterTruck();

console.log(MTruck.toString());
console.log(MTruck.valueOf());
MTruck.openDoor();