  class Child {
    constructor(next, number) {
      this.next = next;
      this.number = number
    }

  eat(apples) {
    apples = apples - Math.round(Math.random() * 2 + 1);
    console.log(`I'm child №${this.number} | apples: ${apples}`);
    if (apples <= 0) {
      console.log (`Neener-neener! I'm glutton! And now are no apples: ${apples}`);
    }
    else {
      this.next.eat(apples);
    }
  }
}

const boy1 = new Child(null,1);
const girl1= new Child(boy1,2);
const boy2 = new Child(girl1,3);
const girl2= new Child(boy2,4); 
const boy3 = new Child(girl2,5);
const girl3= new Child(boy3,6);
const boy4 = new Child(girl3,7);
const girl4= new Child(boy4,8);
const boy5 = new Child(girl4,9);
const girl5= new Child(boy5,10);

firstChild = girl5;
firstChild.eat(10);

module.exports = Child;
