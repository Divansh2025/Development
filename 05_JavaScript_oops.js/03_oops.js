let car = {
  make: "BMW",
  model: "M3",
  year: 1986,
  start: function () {
    // if you want to use any property of this object then,
    // we need to use this. keyword
    return `${this.make} started distributing this in year ${this.year} and model is ${this.model}.`;
  },
};
// console.log(car.start());

// but what if we wanna make much more copies of it and using repeatedly?
// constructor function (first letter of constructor function should be capital letter)
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.describe = function () {
    return `${this.make} started distributing this in year ${this.year} and model is ${this.model}.`;
  };
}

let bmw = new Car("BMW", "X1", 2009);
console.log(bmw.describe());

// prototype and prototype chain:
function Animal(type) {
  this.type = type;
}
// you can access whole prototype chain and inject your own method
// like you wanna add method speak in animal prototype
Animal.prototype.john = function () {
  return `${this.type} can speak and also john`;
};

let dog = new Animal("dog");
console.log(dog.john());

// let's inject in entire array
Array.prototype.divansh = function () {
  return `${this} is divansh`;
};
// each array is individually identify who's calling them
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [10, 20, 30, 40, 50];
console.log(arr1.divansh());
console.log(arr2.divansh());

// inheritance:
// all the functions declared inside class, you start calling them as methods(eg: constructor)
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.year = year;
  }
  // most of time you define methods into it, methods doesn't need function() keyword ahead:
  start() {
    return `${this.make} started distributing this in year ${this.year}.`;
  }
}

// so what's inheritance? if you create class and want to use properties of that
//  class in other one then, you can use extends keyword for inheritance
class Truck extends Vehicle {
  drive() {
    return `${this.make} started distributing this in year ${this.year} It's inherited from Vehicle class.`;
  }
}

// now let's create object of Truck class
let mercedes = new Truck("Mercedes", "E-class", 2019);
// console.log(mercedes.start());
// console.log(mercedes.drive());

// Class constructor Vehicle cannot be invoked without 'new'
// let vehicle1 = Vehicle("Toyota", "Camry", 2019);
let vehicle1 = new Vehicle("Toyota", "Camry", 2019);
console.log(vehicle1.make);
