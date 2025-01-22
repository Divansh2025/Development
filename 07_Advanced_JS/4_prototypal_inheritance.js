function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

let john = new Person("John");
john.greet();
