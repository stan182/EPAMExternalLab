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


module.exports = Child;
