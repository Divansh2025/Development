// every language has data types
// premative data types: string, boolean, number, undefined, null, symbol\
// non-premative data types: objects:- object, array, function
let balance = 1200;
let mybalance = new Number(1200); //new creates complex data type, for extracting value we use valueOf() method
console.log(balance);
console.log(mybalance);
console.log(mybalance.valueOf());
console.log(typeof balance); //number means premative data type
console.log(typeof mybalance); //object means non-premative data type

// boolean
let isloggedin = true;
let islogged = new Boolean(true); //not recommended
console.log(isloggedin);
console.log(islogged);
console.log(islogged.valueOf());
console.log(typeof isloggedin); //boolean means premative data type
console.log(typeof islogged); //object means non-premative data type

// null and undefined
// undefined:(it exists in memory but not assigned)
let firstname;
console.log(firstname);
// null:
let lastname = null;
console.log(lastname);

// string (premitive data type)
let mystring = "hello";
let myusername = "divansh2025";
let greetings = `hello ${myusername}`;
console.log(mystring);
console.log(myusername);
console.log(greetings);

// symbol
// for symbol we use Symbol() method, for more info please visit MDN docs
