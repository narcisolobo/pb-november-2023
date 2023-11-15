/* 1. Print 1-255
print1To255()
Print all the integers from 1 to 255. */

function print1To255() {
  for (let i = 1; i <= 255; i++) {
    console.log(i);
  }
}

/* 2. Print Odds 1-255
printOdds1To255()
Print all odd integers from 1 to 255. */

/* 3. Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and with each integer print the sum so far. */

/* 4. Iterate and Print Array
printArrayVals(arr)
Iterate through a given array, printing each value. */

/* 5. Find and Print Max
printMaxOfArray(arr)
Given an array, find and print its largest element. */

/* 6. Get and Print Average
printAverageOfArray(arr)
Analyze an array’s values and print the average. */

/* 7. Array with Odds
returnOddsArray1To255()
Create an array with all the odd integers between 1 and 255 (inclusive).   */

/* 8. Square the Values
squareArrayVals(arr)
Square each value in a given array, returning that same array with changed values.  */

function squareArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}

squareArrayVals([1, 2, 3]);

/* 9. Greater than Y
printArrayCountGreaterThanY(arr, y)
Given an array and a value Y, count and print the number of array values greater than Y.  */

/* 10. Zero Out Negative Numbers
zeroOutArrayNegativeVals(arr)
Return the given array, after setting any negative values to zero.  */

/* 11. Max, Min, Average
printMaxMinAverageArrayVals(arr)
Given an array, print the max, min and average values for that array. */

/* 12. Shift Array Values
shiftArrayValsLeft(arr)
Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array. */

/* 13. Swap String For Array Negative Values
swapStringForArrayNegativeVals(arr)
Given an array of numbers, replace any negative values with the string 'Dojo'. */
