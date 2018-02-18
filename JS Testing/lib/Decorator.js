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

function LineBallDecorator(ball) {
	this.ball = ball;
}

LineBallDecorator.prototype.getDescription = function() {
	return this.ball.getDescription() + ' with lines';
}



module.exports = { ball: Ball, sBall: SomeBallDecorator, lBall: LineBallDecorator }
