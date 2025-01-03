// "Abstraction": hides the internal implementation details and provides a simplified interface to the user.
class CoffeeMachine {
  start() {
    // call DB
    // call API
    // just internal bla bla bla
    return `starting the machine`;
  }
  brewCoffee() {
    // internal process
    // complex process
    // just internal bla bla bla which is being abstracted from user
    return `brewing coffee`;
  }
  startAll() {
    // close the machine after all process
    let strt = this.start();
    let brew = this.brewCoffee();
    return `${strt} and ${brew}`;
  }
}

let mymachine = new CoffeeMachine();
// console.log(mymachine.start());
// console.log(mymachine.brewCoffee());
console.log(mymachine.startAll());

// "Polymorphism": ability of an object to take more than one forms
class Bird {
  fly() {
    return `Birds Can Fly...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins Can't Fly...`;
  }
}

// method name is exactly same but behaviour of the method is different
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

// Static method:
class calculator {
  static add(a, b) {
    return a + b;
  }
}
let minicalc = new calculator();
// console.log(minicalc.add(2, 3)); will give error because it's not function
let result = calculator.add(77, 33);
console.log(result);

// getter and setter
class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary; // only naming convention, means underscore is a
    // convention to say that this is a private property, (although it's not affecting at all)
  }
  get salary() {
    return this._salary;
  }
  set salary(value) {
    if (value < 0) {
      throw new Error("Salary can't be negative");
    }
    this._salary = value;
  }
}
let emp = new Employee("John", -80000);
console.log(emp.name);
// console.log(emp._salary);
console.log(emp.salary);
