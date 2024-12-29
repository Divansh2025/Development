// 1. write loop that iterate through array and stops the loop when it finds 'stop'
let arr = ["a", "b", "before_stop", "stop", "after_stop"];
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "stop") {
    break;
  }
  arr1.push(arr[i]);
}
console.log(arr1);

// in same above program skip 'stop' element
arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "stop") {
    continue;
  }
  arr2.push(arr[i]);
}
console.log(arr2);

// 2. js knows most time you'll be iterating through an array or object
//    so we can use for of loop and for in loop instead of for loop like below:
let arr3 = ["anderson", "broad", "babar", "cummins", "dale"];
let arr4 = [];
for (const element of arr3) {
  if (element === "babar") continue;
  arr4.push(element);
}
console.log(arr4);

// 3. use "for-in" loop to loop through object containing city population, when "Philadelphia" is found,
// stop the loop and store previous elements in new object
let obj = {
  newyork: 8000000,
  chicago: 1000000,
  sanfrancisco: 800000,
  losangeles: 3800000,
  philadelphia: 1500000,
};
let obj1 = {};
for (const key in obj) {
  if (key === "philadelphia") break;
  obj1[key] = obj[key];
}
console.log(obj1);

// Object.keys() usage: to get only all the keys of an object
console.log(Object.keys(obj1));
// Object.values() usage: to get only all the values of an object
console.log(Object.values(obj1));
// Object.entries() usage: to get all the entries of an object
console.log(Object.entries(obj1));

// 4. write fibonacci series using for loop using recursion,
// and after returing value, print them [Time pass programs]
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

let fibonacci = [];
for (let i = 1; i <= 10; i++) {
  fibonacci.push(fib(i));
}
console.log(fibonacci);

// 5. use for-in loop to loop through object containing usa city population,
// skip any city with population less than 1.1 million and store others in new object
let obj2 = {
  newyork: 8000000,
  chicago: 1000000,
  sanfrancisco: 800000,
  losangeles: 3800000,
  seattle: 1500000,
};
let obj3 = {};
for (const key in obj2) {
  if (obj2[key] < 1100000) continue;
  obj3[key] = obj2[key]; // store all elements in new object
}
console.log(obj3);

// 6. write "for-each" loop to loop through array,
// when perticular element found, stop the loop and store all previous elements in new array,
let arr5 = ["anderson", "broad", "babar", "cummins", "dale"];
let arr6 = [];

// arr5.forEach(() => {});
arr5.forEach((element) => {
  if (element === "babar") return; //remove that fraud
  arr6.push(element);
});
console.log(arr6); // ['anderson', 'broad', 'cummins', 'dale']

// 7. in foreach those brackets are representation of function: () = {},
// which are used when you need temporary function, and don't wanna store name in memory
arr5.forEach(function (respectable_cricketers) {
  if (respectable_cricketers === "babar") return; //here return is used to stop the loop, not break because break is for loop
  console.log(respectable_cricketers);
});
// Few important points:
/*  you think above code should work like "break", but it doesn't work like that, for each element memory
 is created it's a higher-order function that executes the provided callback function once for each array 
 element, and return in the callback only exits the current iteration of the callback function, not the 
 entire forEach.

    The forEach method does not support control flow keywords like break or continue because it does not
 expose the loop mechanism to you. It abstracts away the looping and simply calls the callback function 
 for each element in the array.

    When the callback function encounters return, it just stops executing that iteration of the callback 
 and moves to the next element in the array.

    The forEach loop itself continues to iterate over the remaining elements of the array. 
 It doesn't stop like it would with a break in a for loop.
*/

// 8. write for-each loop to loop through array [2,5,7,9,10], skip value '7', multiply rest by 2, store results
// in new array
let originalArray = [2, 5, 7, 9, 10];
let newArray = [];
originalArray.forEach((element) => {
  if (element === 7) {
    // skip thala because he's unacpped player now
    return; // it works like continue;
  }
  newArray.push(element * 2); // multiply by 2
});
console.log(newArray); // print: [4, 10, 18, 18, 20]

// we already have that array: arr5 = ["anderson", "broad", "babar", "cummins", "dale"];
// 10. use for-of loop to loop through array, if length of element is less than 5,
// stop and store iterated elements in a new array
console.log(arr5);
let temparry = [];
for (const cricketers of arr5) {
  if (cricketers.length < 5) {
    break;
  }
  temparry.push(cricketers);
}
console.log(temparry); // ['anderson', 'broad']
