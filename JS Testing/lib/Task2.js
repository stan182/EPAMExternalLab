//CarBuilder

var CarBuilder = function() {
	this.sample = new Car();
	this.reset();
};

CarBuilder.prototype.reset = function() {
	this.sample.seats = 4;
	this.sample.tripComputer = false;
	this.sample.gps = false;
	this.sample.tyreSize = 'medium';
	return this;
};

CarBuilder.prototype.setSeats = function (seats) {
	this.sample.seats = seats;
	return this;
};

CarBuilder.prototype.setTripComputer = function(tripComputer) {
	this.sample.tripComputer = tripComputer;
	return this;
};

CarBuilder.prototype.setGPS = function(gps) {
	this.sample.gps = gps;
	return this;
};

CarBuilder.prototype.setTyreSize = function(tyreSize) {
	this.sample.tyreSize = tyreSize;
	return this;
};

CarBuilder.prototype.getResult = function() {
	return new Car(
		this.sample.seats,
		this.sample.tripComputer,
		this.sample.gps,
		this.sample.tyreSize
		);
};

//Car

var Car = function(seats, tripComputer, gps, tyreSize) {
	this.seats = seats;
	this.tripComputer = tripComputer;
	this.gps = gps;
	this.tyreSize = tyreSize;
};

Car.prototype.getSeats = function() {
	return this.seats;
};

Car.prototype.getTripComputer = function() {
	return this.tripComputer;
};

Car.prototype.getGps = function() {
	return this.gps;
};

Car.prototype.getTyreSize = function() {
	return this.tyreSize;
};

module.exports = CarBuilder;