# Functions
Imagine we have a robot. When we want our robot to make us a shake, we could write this code:


```js
console.log('Robot is blending the ice cream and milk.');
console.log('Robot is pouring a shake.');
```

Every time we need the robot to make us a shake, we must repeat the same code:

```js
console.log('Robot is blending the ice cream and milk.');
console.log('Robot is pouring a shake.');
```

As we learned with loops, the above code is not DRY (Don't Repeat Yourself). We have too much repetition, and our code is not as efficient as it could be.

## Function Declaration
When we find ourselves repeating the same lines of code, we could DRY it up with the use of functions.

**A function is a reusable chunk of code that accomplishes a task.** Let's refactor our code.

We'll define a function, give it a name, and put our previous code inside of its code block (between the curly braces). Any valid code (variables, conditionals, loops, etc.) can be placed inside a function.

This is also called a *function declaration*.

```js
function makeShake() {
  console.log('Robot is blending the ice cream and milk.');
  console.log('Robot is pouring a shake.');
}
```

## Function Invocation
Now, every time we need our robot to get us a beer, we simply call the function by name.

```js
makeShake();
```

This is also called *invoking the function*, though you will more often hear the the phrase *calling the function*. They mean the same thing.

Invoking or calling the function executes all the code inside that function.

By refactoring our code to use a function, we adhere to the DRY principle and have cleaner,
more efficient code.

## Function Parameters and Arguments
Functions will often require additional input in order to complete their tasks. In such cases, we can use *parameters* to supply this additional input.

Let's say there are two types of ice cream in the freezer.The robot now needs additional input to make us a shake. It needs to know which kind of ice cream to retrieve.

We can refactor our function to expect this by defining a *parameter* like so:

```js
function makeShake(iceCreamFlavor) {
  console.log('Robot is blending the ' + iceCreamFlavor + ' ice cream and milk.');
  console.log('Robot is pouring a ' + iceCreamFlavor + ' shake.');
}
```

If you think parameters are a lot like variables, you're right. They are named placeholders for values, just like variables.

We supply values for these parameters when we call, or *invoke* the function.

```js
makeShake('chocolate');
```

The values we supply for parameters are called *arguments.* You will also hear the phrase, "passing a value" to the function. In the above  function call, we could say we have called the `makeShake` function and passed it a value of `'chocolate'`.

There is no limit to the number of parameters your function can expect. We could also create parameters for number of scoops, or type of milk, for instance.

## Function Return Values
Thus far, our robot has poured a shake, but we have not *received* a shake. Often, functions will process some kind of input and then output the result for use later in our code. In other words, functions can *return* a value.

Let's refactor our function.

```js
function makeShake(iceCreamFlavor) {
  console.log('Robot is blending the ' + iceCreamFlavor + ' ice cream and milk.');
  console.log('Robot is pouring a ' + iceCreamFlavor + ' shake.');

  return iceCreamFlavor + ' shake';
}
```

Now that our function has a return value, we can do something like this:

```js
let shake = makeShake('mint');
console.log(shake) // mint shake
```

The above code declares a variable `shake` and assigns a value to it. The value just happens to be a function call. All functions have values, whether they contain a `return` statement or not. The value of a function is *whatever that function returns.* If a function does not have a `return`, its value is `undefined`.

Let's look at another example, this time with numbers.

```js
function addTwo(num) {
  return num + 2;
}
```

This function simply takes in a parameter `num` as input, and returns the result of adding two to it.

Let's call the function:

```js
let result = addTwo(4);
console.log(result); // 6
```
