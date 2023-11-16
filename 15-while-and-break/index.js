// While Loops

// Requirements:
// 1. Sentry (iterator)
// 2. Where it starts
// 3. When it stops
// 4. How it changes

// A while loop is like a "deconstructed" for loop

/* let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} */

// rule of thumb
// for loops are for when you know how many times
// a loop should run

// while loops are for when you don't

// The Break Command
/* for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
} */

/* for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
} */

// they work with while too!

/* let i = 1;
while (i <= 10) {
  if (i === 3) {
    break;
  }
  console.log(i);
  i++;
} */

let i = 1;
while (i <= 10) {
  if (i === 3) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}
