// Task #1
function Ball(){};

Ball.prototype.getDescription = function () {
  return 'ball';
};

function SomeBallDecorator(_ball) {
  this.ball = _ball;
};

SomeBallDecorator.prototype.getDescription = function() {
  return 'red ' + this.ball.getDescription() + ' with lines';
};

console.log (new Ball().getDescription());
console.log (new SomeBallDecorator(new Ball()).getDescription());

// Task #2

function Observable() {
  this.observers = [];
}

Observable.prototype.addObserver = function(observer) {
  this.observers.push(observer);
}

Observable.prototype.removeObserver = function(observer) {
  var index = this.observers.indexOf(observer);
  if (index>=0){
     this.observers.splice(index,1);
  }
}

Observable.prototype.notify = function(data) {
  for(var index in this.observers) {
    this.observers[index].onData(data);
  }
}

function Observer(name) {
  this.name = name;
}

Observer.prototype.onData = function(data) {
  console.log(this.name+": "+data);
}

var ober1 = new Observer('1');
var ober2 = new Observer('2');

var obable = new Observable();
obable.addObserver(ober1);
obable.addObserver(ober2);

obable.notify('Hi');

obable.removeObserver(ober2);
obable.notify('Hi2');

// Task #3

function Child(next, number) {
  this.next = next;
  this.number = number;
}

Child.prototype.eat = function(apples) {
  apples = apples - Math.round(Math.random() * 2 + 1);
  console.log("I'm child " + this.number + "| count apples: " + apples);
  if (apples <= 0) {
    console.log ("Neener-neener! I'm glutton! And now are no apples: ", apples);
  }
  else {
    this.next.eat(apples);
  }
}

const boy1 = new Child(null, 1);
const girl1 = new Child(boy1, 2);
const boy2 = new Child(girl1, 3);
const girl2 = new Child(boy2, 4);
const boy3 = new Child(girl2, 5);
const girl3 = new Child(boy3, 6);
const boy4 = new Child(girl3, 7);
const girl4 = new Child(boy4, 8);
const boy5 = new Child(girl4, 9);
const girl5 = new Child(boy5, 10);
firstChild = girl5;
firstChild.eat(10);
