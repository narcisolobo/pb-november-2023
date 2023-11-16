/*
  1. sumOfArray(arr)

  Given an array, create a function that
  returns and prints the sum of the values
  in the array.
*/

let arr1 = [1, 2, 3, 4];
let arr2 = [];
let arr3 = [-1, -2, -3, -4];

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  return sum;
}

sumOfArray(arr1);
sumOfArray(arr2);
sumOfArray(arr3);

/*
  2. isDivisibleBy(dividend, divisor)

  Create a function that returns true if the given
  dividend is evenly divisible by the given divisor,
  and false if it is not.

  ex. input: 9, 3
  ex. output: true

  ex. input: 10, 3
  ex. output: false
*/

function isDivisibleBy(dividend, divisor) {
  if (dividend % divisor === 0) {
    return true;
  }

  return false;
}

console.log(isDivisibleBy(9, 3));
console.log(isDivisibleBy(10, 3));

/*
  3. fizzBuzz()

  Create a loop that prints the numbers 1 to 100.
  If the number is evenly divisible by 3, print "fizz"
  instead of the number. If the number is evenly divisible
  by 5, print "buzz" instead of the number. If the number
  is evenly divisible by both 3 *and* 5, print "fizzbuzz"
  instead of the number.
*/

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

/*
  3. numOfVowels(str)

  Given a string, create a function that prints and
  returns the number of vowels in that string.
*/

function numOfVowels(str) {
  let vowels = 'aeiou';
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i].toLowerCase() === vowels[j]) {
        vowelCount++;
      }
    }
  }

  console.log(`Vowel count: ${vowelCount}`);
  return vowelCount;
}

numOfVowels('My name is Inigo Montoya.');
