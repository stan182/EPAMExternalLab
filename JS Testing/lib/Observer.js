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
  
module.exports = Wallet;