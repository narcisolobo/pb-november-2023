# Loop Challenges

In your free time today (if you're all caught up with your assignments), see if you can complete some coding challenges.

1. Create a for loop that starts `i` at 0 and runs as long as `i` is less than 25. Print every even number to the console. Zero should not be printed.
    ```js
    // example output:
    // 2
    // 4
    // 6
    // 8
    // etc...
    // 24
    ```
2. Create a variable named `colors`. Its value should be an array of colors represented by strings. Create a for loop that prints each color string in the array one-by-one *starting from the end of the array* (hint: loops do not have to increment, they can also decrement).
    ```js
    // example:
    let colors = ['red', 'blue', 'yellow', 'green']
    // create for loop here
    // example output:
    // green
    // yellow
    // blue
    // red
    ```
3. Create a variable `num` and assign a whole number as its value. Using a for loop, calculate the sum of all whole numbers up to and including `num` (hint: you will need another variable). This algo is also called "Sigma".
    ```js
    // example:
    let num = 4
    // create for loop here
    // example output:
    // 10 (because 1 + 2 + 3 + 4 = 10)
    ```
4. Create a variable named `nums`. Its value should be an array of numbers. Create a for loop that prints the sum of all numbers in the array.
    ```js
    // example:
    let nums = [1, 2, 3, 4, 5]
    // create for loop here
    // example output:
    // 15
    ```
5. BONUS: Create a loop that prints the numbers 1 to 100. If the number is evenly divisible by 3, print "fizz" instead of the number. If the number is evenly divisible by 5, print "buzz" instead of the number. If the number is evenly divisible by both 3 *and* 5, print "fizzbuzz" instead of the number.
    ```js
    // example output:
    // 1
    // 2
    // fizz
    // 4
    // buzz
    // fizz
    // 7
    // 8
    // fizz
    // buzz
    // 11
    // fizz
    // 13
    // 14
    // fizzbuzz
    // 16
    // etc...
    ```