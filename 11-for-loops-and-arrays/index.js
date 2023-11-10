let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//          0  1  2  3  4  5  6  7  8  9

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    console.log('Even.');
  } else {
    console.log('Odd.');
  }
}

5 % 2 === 1;

for (let j = 0; j < nums.length; j++) {
  if (nums[j] % 3 === 0) {
    console.log(nums[j] + ' Value is a multiple of three.');
  }
}
