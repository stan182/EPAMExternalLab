var Vehicle = {
	speed: 0
};

var Bike = {
	wheelsCount: 2
};

Bike.__proto__ = Vehicle;

var Car = {
	wheelsCount: 4,
	doorsCount: 4,
};

Car.__proto__ = Vehicle;

var MonsterTruck = {
	wheelsSize: "BigFoot"
};

MonsterTruck.__proto__ = Car;

console.log(Bike.speed);
console.log(Car.speed);
console.log(MonsterTruck.speed);
console.log(MonsterTruck.wheelsCount);
console.log(MonsterTruck.doorsCount);
console.log(MonsterTruck.wheelsSize);