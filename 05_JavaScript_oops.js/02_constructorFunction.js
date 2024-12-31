function Person(name, age) {
  this.name = name; // this is used because this is a constructor function
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

// now we wanna create object / instance of this class
let mycar = new Car("Honda", "Civic");
console.log(mycar);

function Tea(type) {
  this.type = type;
  this.price = "99$";
  this.quantity = "500gm";
  //   you can also define function here by this.functionName = function() {}
  this.describe = function () {
    return `This is ${this.type} tea, price is ${this.price} and quantity is ${this.quantity}`;
  };
}

let myTea = new Tea("Green Tea");
console.log(myTea);
console.log(myTea.describe());

// function Animal(species) {
//   this.species = species;
// }

// Animal.prototype.speak = function () {
//   return `${this.species} can speak`;
// };

// let dog = new Animal("dog");
// console.log(dog.speak());
// let cat = new Animal("cat");
// console.log(cat.speak());

// we might throw some error if constructor function is not called by new keyword
function Drink(name) {
  if (!new.target) {
    throw new Error("Bro, you must use new keyword");
  }
  this.name = name;
}

let tea = new Drink("Green Tea");
let coffee = Drink("Cappuccino"); //will throw error
