// declaration and initialization of an array

let colors = ['red', 'blue', 'green', 'yellow', 89, true, [1, 2]];

// getting and setting values in an array
// using bracket notation

console.log(colors[0]); // getting a value using bracket notation

colors[2] = 'purple'; // setting a value using bracket notation

console.log(colors);

// Arrays are reference data types

// push method
// appends a value to the end of an array
colors.push('brown');

console.log(colors);

// pop method
// removes a value from the end of an array
colors.pop();

console.log(colors);

// you can mix and match data types inside of an array

let narciso = ['instructor', 52, true];
