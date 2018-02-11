//HT1------------------------------------------------

function compare(value1, value2) {
  var promise = new Promise(function(resolve, reject) {
    var diff;
    if (typeof value1 === 'number' && typeof value2 === 'number') {
      if (value1 < value2) {
        diff = -1;
      } else if (value1 > value2) {
        diff = 1;
      } else {
        diff = 0;
      }
    }
    setTimeout(function(){
      if (typeof diff === "undefined") {
        reject('Wrong number');
      } else {
        resolve(diff);
      }
    }, 1000);
  });
  return promise;
}

compare(2, 1).then(console.log, console.log);
compare(3, 3).then(console.log, console.log);
compare(1, 5).then(console.log, console.log);
compare(2).then(console.log, console.log);
compare(1, '2').then(console.log, console.log);

//HT2------------------------------------------------

//Для задания 'a':
function random(sumWith) {
    return new Promise(function(resolve) {
      var timeout = Math.random() * 3000;
      setTimeout(function(){
        resolve(Math.random()*3 + sumWith);
    }, timeout)
  })
}

random(3)
  .then(function(x) {
    return random(x);
  })
  .then(function(x) {
    return random(x);
  })
  .then(console.log);


//Для задания 'b':
function random() {
    return new Promise(function(resolve) {
      var timeout = Math.random() * 3000;
      setTimeout(function(){
        resolve(Math.random()*3);
    }, timeout)
  })
}

Promise.all([random(),random(),random(),random(),random(),random(),random()])
  .then(function(arr) {
    console.log(arr);
  });


//HT3------------------------------------------------

function counter () {
	var i = 0;
  var history = [];
 
	return {
  	next: function () {
      history.push(++i);
      return i;
    },
    prev: function () {
      history.push(--i);
      return i;
    },
    history: function () {
    if (history.length > 10) {
      history = history.slice(history.length - 10);
    }
     return history;
   }
  };
}

var counter = counter(); 

console.log('Счетчик увеличивается до', counter.next());
console.log('Счетчик увеличивается до', counter.next());
console.log('Счетчик увеличивается до', counter.next());
console.log('Счетчик увеличивается до', counter.next());
console.log('Счетчик увеличивается до', counter.next());
console.log('Счетчик уменьшается до', counter.prev());
console.log('Счетчик уменьшается до', counter.prev());
console.log('Счетчик уменьшается до', counter.prev());
console.log('Счетчик уменьшается до', counter.prev());
console.log('Счетчик увеличивается до', counter.next());
console.log('В памяти сохранены значения', counter.history());
console.log('Счетчик увеличивается до', counter.next());
console.log('Счетчик увеличивается до', counter.next());
console.log('Счетчик увеличивается до', counter.next());
console.log('В памяти сохранены значения', counter.history());

//HT4------------------------------------------------

function sumWith(number) {
  return this.currentValue += number;
}

var number = 2;
alert(sumWith(number));

//Для дополнительного задания №1
//1
alert(sumWith.bind({ currentValue: 3}, number)());
//2
alert(sumWith.apply({ currentValue: 3 }, [number]));
//3
alert(sumWith.call({ currentValue: 3 }, number));

//Для дополнительного задания №2
function sumWith(number) {
  return this.currentValue += number;
}

var number = 2;
var test = sumWith.bind({ currentValue: -1 });
alert(test(number));
alert(test(number));
alert(test(number));
alert(test(number));
alert(test(number));

//HT5------------------------------------------------

//Для задания 'a':
var c = 0;
var i = setInterval(function() {
	console.log('Random text');
	c++;
  if (c >=5) {
		clearInterval(i);
		} 
    }, 2000);

//Для задания 'b':
function timeout(n) {
    var time = n+2000;
    setTimeout(function() {
      console.log('Random text');
    if (time > 9000) {
        return; 
    } else {
      timeout(time);
    }
  }, n);
}

timeout(1000);

