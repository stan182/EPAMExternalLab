var exp = require('../lib/Decorator.js');
var Ball = exp.ball;
var SomeBallDecorator = exp.sBall;
var LineBallDecorator = exp.lBall;

describe("check ball", function() {
    it("should return new object", function() {
        expect(new Ball()).toBeDefined();
    });

    it("should return ball", function() {
        expect(new Ball().getDescription()).toEqual('ball');
    });

    it("should return 'red ball with lines'", function() {
        expect(new SomeBallDecorator(new Ball()).getDescription()).toEqual('red ball with lines');
    });
    it("should be called 'getDescription' from Ball", function() {
        var ball = new Ball();
        spyOn(ball, 'getDescription');
        new SomeBallDecorator(ball).getDescription();
        expect(ball.getDescription).toHaveBeenCalled();
    });
});