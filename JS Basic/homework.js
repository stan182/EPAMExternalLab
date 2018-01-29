//HT 1--------------------------------------------------------

function chessBoard(width, height) {
  var row = '\n';
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if ((i + j) % 2 === 0) {
        row += ' '
      } else {
        row += '#'
      }
    }
     row += '\n';
  }
  return row;
}
console.log(chessBoard(8, 8));

//HT2--------------------------------------------------------

function countChar(checkStr, char) {
  var count = 0;
  checkStr = checkStr.toLowerCase();
  for (i = 0; i < checkStr.length; i++) {
    if (checkStr.charAt(i) == char) {
      count++;
    } 
  }
  return count;
}
console.log(countChar('My Random String', 'm'));

//HT3--------------------------------------------------------

function makeArray(start, finish, step) {
  var arr = [];
  var s = step || 1;
  var i = start;
  if(start < finish) {
    while(i <= finish) {
      arr.push(i);
      i = i + s;
    }
  } else if(start > finish) {
    while(i >= finish) {
      arr.push(i);
      i = i + s;
    }
  }
  return arr;
}

console.log(makeArray(1, 10));
console.log(makeArray(1, 10, 3));
console.log(makeArray(10, 1, -2));


//HT4--------------------------------------------------------

function reverseArray(arr) {
  var i;
  result = [];
  for (i = arr.length - 1; i >= 0; i--) {
  result.push(arr[i])
  }
return result;
}
console.log(reverseArray([1, 2, 3, 4]));

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
var array = ['A', 'B', 'C', 'D'];
reverseArrayInPlace(array);
console.log(array);

//HT5--------------------------------------------------------

function mergeArrays(...arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
  }
  result.sort();
  let newArr = [result[0]];
  for (i = 1; i < result.length; i++) {
    if (result[i] != result[i - 1]) {
      newArr.push(result[i]);
    }
  }
  return newArr;
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [2, 4], [4, 6]));

//HT6--------------------------------------------------------

function some(arr, condition) {
  for (const item of arr) {
    if (condition(item)) {
      return true;
    }
  }
  return false;
}

function every(arr, condition) {
  for (const item of arr) {
    if (!condition(item)) {
      return false
    }
  }
  return true;
}

console.log(every([1, 4, NaN, 6], Number.isNaN));
console.log(every([NaN, NaN], Number.isNaN));
console.log(some([1, 2, 6], Number.isNaN));
console.log(some([1, 4, NaN, 6], Number.isNaN));

//HT7--------------------------------------------------------

function multiplyOrThrow(a, b) {
  if (Math.random() < 0.5) {
    return a * b;
  } else {
    throw "MultiplicatorUnitFailure";
  }
}

function unconditionMultiply(a, b) {
  let result;
  let err = "MultiplicatorUnitFailure";
  while (true) {
    try {
      result = multiplyOrThrow(a, b);
      break;
    } catch (error) {
      if (error == err) {
        result;
      } else if (!(error instanceof err))
        throw error;
    }
  }
  return result;
}

console.log(unconditionMultiply(2, 2));

//HT8--------------------------------------------------------

 function deepCompare(x, y) {
   if (typeof x !== 'object') {
     return x === y;
   } else {
     var equal = Object.keys(x).length === Object.keys(y).length;
     for (var k in x) {
       equal = equal && deepCompare(x[k], y[k]);
     }
     return equal;
   }
 }
 
console.log(deepCompare({ one: 1, two: '2' }, { one: 1, two: '2' }));
console.log(deepCompare({ one: 1, two: '2' }, { two: '2' }));
console.log(deepCompare({ one: 1, two: '2' }, { one: 1, two: 2 }));

//HT9--------------------------------------------------------

function replaceQuotes(str) {
  return str.replace(/'/g, '"');
}

console.log(replaceQuotes("I’m the 'hero'"));

//HT10--------------------------------------------------------

function findNumbers(arr) {
  var result = [];
  for (var x in arr) {
    if (/^[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?$/.test(arr[x])) {
      result.push(arr[x]);
    }
  }
  return result;
}

console.log(findNumbers(["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"]));

console.log(findNumbers(["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]));

//HT11-------------------------------------------------------

function getNames(date) {
  var month = date.getMonth(),
    dow = date.getDay();
  var m, d;
  if (month === 0) {
    m = "January";
  } else if (month === 1) {
    m = "February";
  } else if (month === 2) {
    m = "March";
  } else if (month === 3) {
    m = "April";
  } else if (month === 4) {
    m = "May";
  } else if (month === 5) {
    m = "June";
  } else if (month === 6) {
    m = "July";
  } else if (month === 7) {
    m = "August";
  } else if (month === 8) {
    m = "September";
  } else if (month === 9) {
    m = "October";
  } else if (month === 10) {
    m = "November";
  } else if (month === 11) {
    m = "December";
  }
  if (dow === 0) {
    d = "Sunday";
  } else if (dow === 1) {
    d = "Monday";
  } else if (dow === 2) {
    d = "Tuesday";
  } else if (dow === 3) {
    d = "Wednesday";
  } else if (dow === 4) {
    d = "Thursday";
  } else if (dow === 5) {
    d = "Friday";
  } else if (dow === 6) {
    d = "Saturday";
  }
  return m + ", " + d;
}

console.log(getNames(new Date()));

//HT12-------------------------------------------------------

function differenceInYears(date1, date2) {
  var diff = date1.getTime() - date2.getTime();
  var abs = Math.abs(diff);
  var diffInYears = abs / 1000.0 / 60 / 60 / 24 / 365;
  return Math.round(diffInYears * 10) / 10;
}

console.log(differenceInYears(new Date(2014,10,2), new Date(2016,10,2)));
console.log(differenceInYears(new Date(2014, 0), new
Date(2014, 6)));
