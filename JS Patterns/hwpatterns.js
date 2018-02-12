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

function Wallet() {
  this.amount = Math.random() * 1000; 
  this.observers = [];
}
Wallet.prototype.send = function () { 
    const minus = Math.random() * 100; 
    this.notify(minus);
    this.amount = this.amount - minus; 
    console.log(this.amount); 
    if(this.amount > 0) { 
      setTimeout(this.send.bind(this), Math.random() * 500); 
    } else { 
      console.log('WALLET is empty'); 
    } 
};
Wallet.prototype.eventFromWallet = function(plus) {
  this.amount = this.amount + plus; 
};
Wallet.prototype.subscribe = function(observer) {
  this.observers.push(observer);
};
Wallet.prototype.notify = function(minus) {
  this.observers.forEach(function(observer) {
    observer.eventFromWallet(minus);
  });
};
  
let wallet1 = new Wallet();
let wallet2 = new Wallet();

wallet1.subscribe(wallet2);
wallet2.subscribe(wallet1);

wallet1.send();
wallet2.send();

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
