// create array and store it's first element in another variable
let arr = ["a", "b", "c", "d", "e"];
let arr1 = new Array("a", "b", "c", "d", "e");
const store = arr1[0];
console.log(store);

//now push another element into 'arr'
arr.push("z");
console.log(arr);
// now pop that last element
arr.pop();
console.log(arr);

// if you copy array directly by '=' then if you pop element from one of them
// then from both array elements are popped, like below:
let bowlers1 = ["rabada", "bumrah", "starc", "hazlewood", "boult"];
let bowlers2 = bowlers1;
console.log();
console.log(`before pop: ${bowlers1}`);
console.log(`before pop: ${bowlers2}`);
console.log();
bowlers1.pop();
console.log(`after pop: ${bowlers1}`);
console.log(`after pop: ${bowlers2}`); //because both points to same memory reference
// solution for that:
let batsman1 = ["root", "smith", "kohli", "williamson"];
let batsman2 = [...batsman1]; //spread operator
// let batsman2 = batsman1.slice();
batsman1.pop();
console.log();
console.log(batsman1);
console.log(batsman2);

// merge two arrays into new array: concat
// like we have bowlers2 and batsman2
let teamxi = batsman2.concat(bowlers2);
console.log(teamxi);

// check if perticular element is in array and store result in boolean
isplaying = bowlers2.includes("rabada");
console.log(isplaying);
