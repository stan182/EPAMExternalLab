class Wallet {
  constructor() {
    this.amount = Math.random() * 1000; 
    this.observers = [];
  }

  send() { 
    const minus = Math.random() * 100; 
    this.notify(minus);
    this.amount = this.amount - minus; 
    console.log(this.amount); 
    if(this.amount > 0) { 
      setTimeout(this.send.bind(this), Math.random() * 500); 
    } else { 
      console.log('WALLET is empty'); 
    } 
  }

  eventFromWallet(plus) {
    this.amount = this.amount + plus; 
  }

  notify(minus) {
    this.observers.forEach(function(observer) {
      observer.eventFromWallet(minus);
      });
  }

  subscribe(observer) {
    this.observers.push(observer);
  }
}  

let wallet1 = new Wallet();
let wallet2 = new Wallet();

wallet1.subscribe(wallet2);
wallet2.subscribe(wallet1);

wallet1.send();
wallet2.send();

module.exports = Wallet;