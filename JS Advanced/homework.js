//HT1------------------------------------------------

function compare(value1, value2) {
  var promise = new Promise(function(resolve, reject) {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      reject("Wrong numbers");
    } else {
      var diff;
      if (value1 < value2) {
        diff = -1;
      } else if (value1 > value2) {
        diff = 1;
      } else {
        diff = 0;
      }
      setTimeout(function() { resolve(diff); }, 1000);
    }
  });
  return promise;
}

console.log(compare(2, 1));
console.log(compare(1, 5));
console.log(compare(2));
console.log(compare(1, '2'));

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

random(10)
  .then(function(x) {
    return random(x);
  })
  .then(function(x) {
    return random(x);
});

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

console.log('Счетчик увеличивается до ', counter.next());
console.log('Счетчик увеличивается до ', counter.next());
console.log('Счетчик увеличивается до ', counter.next());
console.log('Счетчик увеличивается до ', counter.next());
console.log('Счетчик увеличивается до ', counter.next());
console.log('Счетчик уменьшается до ', counter.prev());
console.log('Счетчик уменьшается до ', counter.prev());
console.log('Счетчик уменьшается до ', counter.prev());
console.log('Счетчик уменьшается до ', counter.prev());
console.log('Счетчик увеличивается до ', counter.next());
console.log('В памяти сохранены значения', counter.history());
console.log('Счетчик увеличивается до ', counter.next());
console.log('Счетчик увеличивается до ', counter.next());
console.log('Счетчик увеличивается до ', counter.next());
console.log('В памяти сохранены значения', counter.history());

//HT4------------------------------------------------

