const Person = {
  name: "John",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

Person.greet();

const greetfn = Person.greet; // context is lost, so this is undefined
greetfn(); // hello undefined

// so to fix this we can use bind method
// const boundGreet = Person.greet.bind(Person); // now this is bound to Person
const boundGreet = Person.greet.bind({ name: "Baba Yaga" }); // now this is bound to Person
boundGreet();

// we can also use call and apply for binding or fixing the context of a function
const boundGreet2 = Person.greet.call({ name: "Baba Yaga" });
boundGreet2();

const boundGreet3 = Person.greet.apply({ name: "Baba Yaga" });
boundGreet3();

// so what's the difference between call and apply and bind?
// bind returns a new function
// call and apply returns the value
