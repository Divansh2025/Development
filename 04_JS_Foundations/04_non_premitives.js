// array, functions, objects,..etc
// use ctrl + d to select multiple occurences, like myobj below and change them all at once
// you might think "const" means entire myobj is constant, and it's true,
// (means this much memory space should be fixed but) inside of myobj, you can
// change the properties, like below,
const myobj = {
  firstname: "john",
  email: "john@gmail.com",
  age: 25,
  isloggedin: true,
};
myobj.age = 26;
console.log(myobj);
console.log(`type is ${typeof myobj}`); //template literals
//for accessing the properties of the object, we can use dot notation or square brackets
console.log(myobj.email);
console.log(myobj["email"]);

// other common objects, like date, math, etc
const today = new Date();
console.log(today);
console.log(`typeof today objcet is ${typeof today}`);
console.log(today.toString());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getSeconds());
console.log(today.getTime());

// arrays
const bowlers = ["starc", "bumrah", "hazlewood", "rabada", true, 25];
console.log(bowlers[0]); //starc

// sometimes javascript acts weird like below:
console.log(1 + "1"); //11
console.log("1" + 1); //11
let isvalue = true;
console.log(isvalue + 2); //3

// type coercion
let myvar = "25"; //string
console.log(myvar + 2); //252
console.log(myvar - 2); //23
console.log(myvar * 2); //50
console.log(myvar / 2); //12.5
console.log(myvar + 2 + 3); //2523
console.log(myvar - 2 + 3); //26
console.log(myvar * 2 + 3); //53
console.log(myvar / 2 + 3); //15.5

// type conversion
let myvar2 = Number("25"); //string converted to number
console.log(myvar2 + 2); //27
let isval = "2abc";
console.log(Number(isval)); // NaN
console.log(typeof Number(isval)); //Number
console.log(Number(null)); //0
console.log(typeof null); //object
console.log(typeof Number(null)); //Number
