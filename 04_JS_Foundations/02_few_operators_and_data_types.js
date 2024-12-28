/*
string
number
boolean
bigint

undefined
null (is not equal to 0, it's empty, eg: can you even say that temperature is "null"? No, temperature is 0)

object

symbol
*/

// var score = 110;
let score = 110;
console.log(score);
let link = "www.google.com";
let isloggedIn = true;

//object
let teaIngredients = ["lemon tea", "ginger", "green", "black", "white", "chai"];
console.log(teaIngredients);

let user = { firstname: "John", lastname: "Doe" };
console.log(user);

let getScore = score;
console.log(getScore);

// const are immutable, they won't change
// const username = "John";
// username = "Doe";
// console.log(username);

// arithmetic and other operators
let addition = 8 + 5;
let subtraction = 8 - 5;
let multiplication = 8 * 5;
let division = 8 / 5;
let modulus = 8 % 5;
let exponentiation = 8 ** 5;
console.log(
  addition,
  subtraction,
  multiplication,
  division,
  modulus,
  exponentiation
);

// increment and decrement
let a = 5;
a++;
console.log(a);
let b = 5;
b--;
console.log(b);

// Comparision operators
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);

// logical operators
// And: &&
// Or: ||
// Not: !
let c = 5;
let d = 10;
console.log(c > 3 && d > 3);
console.log(c > 3 || d > 3);
console.log(!(c > 3 && d > 3));

