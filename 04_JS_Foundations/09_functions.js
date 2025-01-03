// first warm up with random things :)
// random number generator:
console.log(`hello 0-9: ${Math.floor(Math.random() * 10)}`); // random number between 0 and 9
// random number generator in given range:
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // min and max included
}
console.log(`Kohli score for tomorrow match is ${random(7, 125)}`); // Kohli score for tomorrow match

// Now let's start with functions example, give any strings to function it write
//  'retirement loading' at the end:
function retirement(name) {
  // Convert name to lowercase for case-insensitive comparison
  if (
    name.toLowerCase().includes("thala") ||
    name.toLowerCase().includes("dhoni")
  ) {
    console.log(`Definitely not!`);
  } else console.log(`retirement loading for ${name}`);
}
retirement("MsDhoni");

//function greet () {}
//const greet () => {}

/* write "Arrow function" which has two parameters: price and quantity,
 function should return total by multiplying price and quantity:-
/* let total = (price, quantity) => price * quantity; everything on same line of code,
   no enter hit then no brackets or return needed */
let total = (price, quantity) => {
  return price * quantity;
};
let totalCost = total(11, 5);
console.log(totalCost);

// we can return function in js, also we can take function as parameters.

// higher order and nested functions:
/* 
Qu: write function name 'processTeaOrder' that takes another function, 'makeTea'
as parameter and calls it with the argument "earl gray" return the result of calling "makeTea"
*/
function makeTea(teaType) {
  return `Your ${teaType} tea is ready`;
}
function processTeaOrder(myparameter) {
  return myparameter("earl gray");
}
console.log(processTeaOrder(makeTea));

/*
few points:
1. A "higher-order function" / "First Class function" is a function that takes another function
as a parameter / take it as variable and returns back is called higher order function.
examples of higher order functions: map, filter, reduce, forEach,...etc
2. A nested function is a function that is defined inside another function.
examples of nested functions: function inside function literally.
*/

/*
Qu: write function named 'createTeaMaker' that returns another function. Returned function
should take one parameter, 'teaType', and return message like "Making Green Tea".
Store returned function in variable named 'teaMaker', and call it with "Green Tea".
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType} Tea.`;
  };
}

let teaMaker = createTeaMaker();
console.log(teaMaker("Green Tea"));

// unlimited arguments:
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(add(1, 3, 4, 6, 7, 80, 9, 10)); // you can pass any number of arguments

//using Rest parameters/operators:
function addnumbers(...numbers) {
  // it's an array of numbers
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(addnumbers(1, 3, 4, 6, 7, 80, 9, 10));
