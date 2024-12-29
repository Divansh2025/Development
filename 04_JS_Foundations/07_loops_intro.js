// for prompt purpose:
var prompt = require("prompt-sync")();

// write while loop to count sum of all n elements like 1+2+3+4+5 = 15
let i = 1;
let sum = 0;
let n = 5;
while (i <= n) {
  sum += i;
  i++;
}
console.log(sum);

// while loop that count from user input n to 1, and store all elements in array
let arr = [];
let num = 5;
while (num >= 1) {
  arr.push(num);
  num--;
}
console.log(arr); // [5, 4, 3, 2, 1]

// write do while loop that ask everytime users their favourite bowlers untill user types stop
let bowlers = [];
let bowler;

do {
  bowler = prompt("Enter your favourite bowler (type 'stop' to finish): ");
  if (bowler !== "stop") bowlers.push(bowler);
} while (bowler !== "stop");

console.log(bowlers);

// write do while loop that adds numbers from perticular range given by user
//  input start and end number and store them in array
let start = Number(prompt("Enter start number: "));
let end = Number(prompt("Enter end number: "));
let arr1 = [];
let num1 = start;
do {
  arr1.push(num1);
  num1++;
} while (num1 <= end);
console.log(arr1);

// write for loop that adds numbers from perticular range given by user
//  input start and end number and store them in array
let start1 = Number(prompt("Enter start number: "));
let end1 = Number(prompt("Enter end number: "));
let arr2 = [];
for (let i = start1; i <= end1; i++) {
  arr2.push(i);
}
console.log(arr2);

// multiply each element in array and store it in another array
console.log(
  "Below: multiply each element with 2in array and store it in another array."
);
let arr3 = [1, 2, 3, 4, 5];
let arr4 = [];
for (let i = 0; i < arr3.length; i++) {
  arr4.push(arr3[i] * 2);
}
console.log(arr3);
console.log(arr4);
