var Wallet = require('../lib/Observer.js');

describe("check Wallet class", function() {
	it("subscribe is called", function() {
		var Wal1 = new Wallet();
		var Wal2 = new Wallet();
		spyOn(Wal1, 'subscribe');
		Wal1.subscribe(Wal2);
		Wal2.subscribe(Wal1);
		expect(Wal1.subscribe).toHaveBeenCalled();
	})	
	it("notify is called", function(){
		var Wal1 = new Wallet();
		var Wal2 = new Wallet();
		spyOn(Wal1, 'notify');
		Wal1.subscribe(Wal2);
		Wal2.subscribe(Wal1);
		Wal1.notify(123);
		expect(Wal1.notify).toHaveBeenCalled();
	})
	it("Wallet1 have the money", function() {
		var Wal1 = new Wallet();
		var amount = Wal1.amount;
		expect(amount).not.toEqual(undefined);
	})
	it("shold return true", function(){
		expect(new Wallet()).toBeDefined();
	})
})
