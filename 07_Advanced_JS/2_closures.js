// 'closure is a function' that has access to the outer function's scope

function outer() {
  let counter = 4;
  return function inner() {
    counter++;
    return counter;
  };
}

const myincrement = outer();
console.log(myincrement(), myincrement());
console.log(myincrement());
// why we can't use inner() is because it is a local function, which is not accessible outside the outer function

// let's use callback function
// callback function is a function that is passed as an argument to another function

function log1() {
  console.log("log1");
}
function log2() {
  console.log("log2");
}

function logwhatspresent(callback) {
  // above, i expect function as an argument, not value.
  callback();
}
logwhatspresent(log1); // it's same as log1();
logwhatspresent(log2); // it's same as log2();

