/*
  1. Print 1-255
  print1To255()
  Print all the integers from 1 to 255.

  ex. output:
  1
  2
  3
  etc...
  255
*/

function print1to255() {
  var num = 1;
  while (num <= 255) {
    console.log(num);
    num = num + 1;
  }
}

// print1to255();

/*
  2. Print Odds 1-255
  printOdds1To255()
  Print all odd integers from 1 to 255.

  ex. output:
  1
  3
  5
  etc...
  255
*/

function printOdds1to255() {
  var num = 1;
  while (num <= 255) {
    console.log(num);
    num += 2;
  }
}

// printOdds1to255();

/*
  3. Print Sum 0-255
  printSum0to255()
  Print the sum of the integers from 0 to 255.

  ex. output: 32640
*/

function printSum0to255() {
  var sum = 0;
  for (var num = 0; num <= 255; num++) {
    sum += num;
  }
  return sum;
}

// console.log(printSum0to255());

/*
  4. Iterate and Print Array
  printArrayVals(arr)
  Iterate through a given array, printing each value.

  ex. input: [42, "pink", false]
  ex. output:
  42
  pink
  false
*/

function printArrayValues(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    console.log('array[', idx, '] = ', arr[idx]);
  }
}

// printArrayValues([42, 'pink', false]);

/*
  5. Find and Print Max
  printMaxOfArray(arr)
  Given an array, find and print its largest element.

  ex. input: [52, 21, 72, 59, 75, 8, 41, 99, 15, 23]
  ex. output: 99

  ex. input: [-52, -21, -72]
  ex. output: -21
*/

function printArrayMax(arr) {
  // edge case
  if (arr.length == 0) {
    console.log('[], no max val.');
    return;
  }

  var max = arr[0];
  for (var idx = 1; idx < arr.length; idx++) {
    if (arr[idx] > max) {
      max = arr[idx];
    }
  }

  console.log('Max value is:', max);
}

// printArrayMax([52, 21, 72, 59, 75, 8, 41, 99, 15, 23]);
// printArrayMax([-52, -21, -72]);

/*
  6. Get and Print Average
  printAverageOfArray(arr)
  Analyze an array’s values and print the average.

  ex. input: [1, 2, 3, 4]
  ex. output: 2.5
*/

let arr1 = [1, 2, 3, 4];

function printAverageOfArray(arr) {
  // edge case
  if (arr.length == 0) {
    console.log('[ ], no avg val.');
    return;
  }

  var sum = arr[0];
  for (var idx = 1; idx < arr.length; idx++) {
    sum += arr[idx];
  }
  console.log('Avg val:', sum / arr.length);
}

// printAverageOfArray(arr1);

/*
  7. Array with Odds
  returnOddsArray1To255()
  Create and return an array with all the odd integers between
  1 and 255 (inclusive).

  ex. return value:
  [1, 3, 5, 7, ..., 255]
*/

function oddArray1to255() {
  var oddArray = [];
  for (var num = 1; num <= 255; num += 2) {
    oddArray.push(num);
    // oddArray[oddArray.length] = num;
  }
  return oddArray;
}

console.log(oddArray1to255());

/*
  8. Square the Values
  squareArrayVals(arr)
  Square each value in a given array, returning that
  same array with changed values.

  ex. input: [1, 2, 3]
  ex. output: [1, 4, 9]
*/

function squareArrVals(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx] + arr[idx];
  }
}

/*
  9. Greater than Y
  printArrayCountGreaterThanY(arr, y)
  Given an array and a value Y, count and print the
  number of array values greater than Y.

  ex. inputs: arr = [1, 2, 3, 4, 5], y = 3
  ex. output: 2
*/

function numGreaterThanY(arr, y) {
  var numGreater = 0;
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] > y) {
      numGreater++;
    }
  }
  return arr[y];
}

/*
  10. Zero Out Negative Numbers
  zeroOutArrayNegativeVals(arr)
  Return the given array, after setting any negative
  values to zero.

  ex. input: [1, -2, 3, 4, -5]
  ex. return value: [1, 0, 3, 4, 0]
*/

function setNegsToZero(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (arr[idx] < 0) {
      arr[idx] = 0;
    }
  }
}

/*
  11. Max, Min, Average
  printMaxMinAverageArrayVals(arr)
  Given an array, print the max, min and average
  values for that array.

  ex. input: [4, 1, 5, 2, 3]
  ex. output:
  max: 5
  min: 1
  avg: 3
*/

function maxMinAverage(arr) {
  if (arr.length == 0) {
    return;
  }
  var min = arr[0];
  var max = arr[0];
  var sum = arr[0];
  for (var idx = 1; idx <= arr.length; idx++) {
    if (arr[idx] < min) {
      min = arr[idx];
    }
    if (arr[idx] > max) {
      max = arr[idx];
    }
    sum += arr[idx];
  }
  return min;
  return max;
  return avg;
}

/*
  12. Shift Array Values
  shiftArrayValsLeft(arr)
  Given an array, move all values forward (to the
  left) by one index, dropping the first value and
  leaving a 0 (zero) value at the end of the array.
  Print the mutated array.

  ex. input: [1, 2, 3, 4, 5]
  ex. output: [2, 3, 4, 5, 0]
*/

function arrShift(arr) {
  for (var idx = 1; idx < arr.length; idx++) {
    arr[idx - 1] = arr[idx];
  }
  arr.length--;
  return arr;
}

/*
  13.
  Swap String For Array Negative Values
  swapStringForArrayNegativeVals(arr)
  Given an array of numbers, replace any negative
  values with the string 'Dojo'.

  ex. input: [1, -2, 3, 4, -5]
  ex. return value: [1, 'Dojo', 3, 4, 'Dojo']
*/

function subStringForNegs(arr) {
  for (var idx = 0; idx < arr.length; idx++) {
    if (idx < 0) {
      arr[idx] = 'Dojo';
    }
  }
  return arr;
}
