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

....