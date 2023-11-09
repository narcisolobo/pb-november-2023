// Conditionals

// boolean expression inside the parentheses
if (2 + 2 === 4) {
  console.log('two plus two equals four');
}

// double equal performs type coersion before equality check
// triple equal checks equality of both value and data type

console.log('1' == 1); // true
console.log('1' === 1); // false

let age = 50;

if (age >= 21) {
  // curly braces enclose the code block of your if statement
  console.log('Have a beer on me!');
} else if (age >= 18) {
  console.log('Almost there.');
} else {
  // otherwise
  console.log('Take a hike.');
}
