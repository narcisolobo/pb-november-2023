# Variables and Data Types Continued

## Variable Declaration
In JavaScript, variables can be declared in three ways.
1. using `var`
   1. `var myName = "Narciso Lobo";`
2. using `let`
   1. `let isInstructor = true;`
3. using `const`
   1. `const numberOfToys = 5;`

Yesterday, we used the `var` keyword to declare variables. We can also use `let` or `const` as well. The differences between each keyword is outside the scope of this lecture. Suffice to say, `let` and `const` make our code more robust.

For now, use `let` instead of `var`. Only use `var` if you **must** support older browsers. The `const` keyword will be explained to you if you take the JavaScript stack. It is mentioned here for completeness.

These keywords are only used when we declare variables. After variable declaration, they are no longer used.

```js
// variable declaration and initialization
let jordan = 23;

// value reassignment
jordan = 45;
```

## Primitive Data Types

### Numbers
JavaScript makes no distinction between whole numbers and decimal numbers. Other languages may have separate data types, but to JavaScript, the data types of both 3 and 3.14 are numbers.

```js
// number data types
let numberOfBlindMice = 3;
let pi = 3.14
```

### Strings
String data types consist of text enclosed in quotation marks. You may use either single or double quotes, but you must stay consistent with each value assignment.

```js
let favoriteMuppet = "Fozzie Bear"; // okay
let deku = 'Izuku Midoriya'; // okay
let myTeam = 'Chicago Bears"; // syntax error
```

### Booleans
A boolean data type can hold only one of two possible values - `true` or `false`.

```js
let isSleeping = false;

let isAwake = true;
```

## Null and Undefined
`null` in JavaScript also represents the absence of a value, but it's explicitly set by the programmer to indicate that a variable intentionally has no value or that it's empty.

Intentionally Empty: Unlike `undefined`, which is the default absence of a value, `null` is a deliberate assignment to represent 'nothing' or 'empty'.

### Key Differences:
`undefined` typically means a variable has been declared but not yet assigned a value, whereas `null` represents a deliberate absence of value.

`undefined` is the default value a variable takes when no value has been assigned, while `null` is explicitly assigned by a programmer.

### Use Cases:
`undefined` might occur naturally when a variable is declared but not initialized.

`null` might be used when you want to indicate that a variable intentionally has no value or needs to be reset to an empty state.

Understanding the difference between `null` and `undefined` helps in writing cleaner and more predictable code. Both are used to represent the absence of a value, but `undefined` is more of a default state, and `null` is an explicitly assigned value.