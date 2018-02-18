var Child = require('../lib/Chain.js')


describe("check KidsChain", function() {
	it('should return undefined', function() {
		var boy1 = new Child(1, 1);
		expect(boy1.next).toEqual(1);
	});
	it("function 'it' in started", function() {
		var boy1 = new Child();
		spyOn(boy1, 'eat');
		boy1.eat();
		expect(boy1.eat).toHaveBeenCalledWith();
	})
	it("first value object != null", function() {
		var boy1 = new Child(null, 1);
		var boy2 = new Child(boy1, 2);
		var boy3 = new Child(boy2, 3);
		expect(boy2.next).not.toEqual(null);
		expect(boy1.next).toEqual(null);
	})
})