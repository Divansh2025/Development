// check which number is larger
let num1 = 3;
let num2 = 7;
if (num1 > num2) {
  console.log(`${num1} is larger number`);
} else {
  console.log(`${num2} is larger number`);
}

// check if variable is number or not
let score = "44a";
if (typeof score === "number") {
  console.log(`Yes, ${score} is a number`);
} else {
  console.log(`No, ${score} is not a number`);
}

// check if boolean value is true or false: very easy
let isfoodready = true;
if (isfoodready) {
  console.log(`Yes, food is ready.`);
} else {
  console.log("No, food isn't ready");
}

// checking if array is empty or not
let items = [];
let otheritems = ["a", "b", "c", "d"];
if (items.length) {
  console.log("array is filled with elements.");
} else {
  console.log("array is empty");
}