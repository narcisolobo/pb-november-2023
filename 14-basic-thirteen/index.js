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

function print1To255() {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
}

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

/*
  3. Print Ints and Sum 0-255
  printIntsAndSum0To255()
  Print integers from 0 to 255, and with each integer,
  print the sum so far.

  ex. output:
  0 0
  1 1
  2 3
  3 6
  4 10
  5 15
  etc...
  255 32640
*/

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

/*
  5. Find and Print Max
  printMaxOfArray(arr)
  Given an array, find and print its largest element.

  ex. input: [52, 21, 72, 59, 75, 8, 41, 99, 15, 23]
  ex. output: 99

  ex. input: [-52, -21, -72]
  ex. output: -21
*/

/*
  6. Get and Print Average
  printAverageOfArray(arr)
  Analyze an array’s values and print the average.

  ex. input: [1, 2, 3, 4]
  ex. output: 2.5
*/

/*
  7. Array with Odds
  returnOddsArray1To255()
  Create and return an array with all the odd integers between
  1 and 255 (inclusive).

  ex. return value:
  [1, 3, 5, 7, ..., 255]
*/

/*
  8. Square the Values
  squareArrayVals(arr)
  Square each value in a given array, returning that
  same array with changed values.

  ex. input: [1, 2, 3]
  ex. output: [1, 4, 9]
*/

function squareArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}

squareArrayVals([1, 2, 3]);

/*
  9. Greater than Y
  printArrayCountGreaterThanY(arr, y)
  Given an array and a value Y, count and print the
  number of array values greater than Y.

  ex. inputs: arr = [1, 2, 3, 4, 5], y = 3
  ex. output: 2
*/

/*
  10. Zero Out Negative Numbers
  zeroOutArrayNegativeVals(arr)
  Return the given array, after setting any negative
  values to zero.

  ex. input: [1, -2, 3, 4, -5]
  ex. return value: [1, 0, 3, 4, 0]
*/

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

/*
  13.
  Swap String For Array Negative Values
  swapStringForArrayNegativeVals(arr)
  Given an array of numbers, replace any negative
  values with the string 'Dojo'.

  ex. input: [1, -2, 3, 4, -5]
  ex. return value: [1, 'Dojo', 3, 4, 'Dojo']
*/
