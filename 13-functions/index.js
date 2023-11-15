// console.log('Robot is blending the ice cream and milk.');
// console.log('Robot is pouring a shake.');

// console.log('Robot is blending the ice cream and milk.');
// console.log('Robot is pouring a shake.');

// console.log('Robot is blending the ice cream and milk.');
// console.log('Robot is pouring a shake.');

// console.log('Robot is blending the ice cream and milk.');
// console.log('Robot is pouring a shake.');

// console.log('Robot is blending the ice cream and milk.');
// console.log('Robot is pouring a shake.');

// A function is a piece of reusable code that accomplishes a task.

// Creating a function also known as function declaration
function makeShake() {
  console.log('Robot is blending the ice cream and milk.');
  console.log('Robot is pouring a shake.');
}

// calling the function also known as invoking the function
makeShake();

// Parameters
function makeFlavoredShake(iceCreamFlavor) {
  console.log(
    'Robot is blending the ' + iceCreamFlavor + ' ice cream and milk.'
  );

  // template literal notation
  console.log(`Robot is blending the ${iceCreamFlavor} ice cream and milk.`);

  console.log('Robot is pouring a shake.');
}

// passing a value to the function
// also known as supplying an argument for a parameter
makeFlavoredShake('chocolate');

// more parameters
function makeFlavoredShake2(numScoops, iceCreamFlavor, milkType) {
  console.log(
    `Robot is blending ${numScoops} scoops of ${iceCreamFlavor} ice cream and ${milkType}.`
  );
  console.log(`Robot is pouring a ${iceCreamFlavor} ${milkType} shake.`);
  return `${iceCreamFlavor} ${milkType} shake.`;
}

makeFlavoredShake2(2, 'mint', 'oat milk');

// the return keyword

let shake = makeFlavoredShake2(2, 'chocolate', 'skim milk');
console.log(shake);

// remember - the return keywords ends the function
// nothing runs after a return
