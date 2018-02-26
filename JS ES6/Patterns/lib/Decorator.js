class Ball{
	getDescription() {
	  return 'ball';
	}
}

class SomeBallDecorator {
	constructor(_ball) {
  		this.ball = _ball;
	}
	getDescription() {
		return 'red ' + this.ball.getDescription() + ' with lines';
	}
}

class LineBallDecorator {
  constructor(_ball){
    this.ball = _ball;
  }
  getDescription(){
    return this.ball.getDescription() + 'lines';
  }
}

module.exports = { ball: Ball, sBall: SomeBallDecorator, lBall: LineBallDecorator }
