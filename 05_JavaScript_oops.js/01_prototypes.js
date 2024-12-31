// what is prototypes in js?

let computer = {
  ram: "16gb",
  harddisk: "1tb",
  processor: "i7",
  color: "black",
  company: "dell",
};

let laptop = {
  display: "UHD",
  __proto__: computer,
};

console.log(`computer`, computer.__proto__); // here you can't see much, but you can see in console
console.log(`laptop`, laptop.__proto__);

let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "Elon Musk",
};

Object.setPrototypeOf(tesla, genericCar);
console.log(tesla);
console.log(`tesla`, Object.getPrototypeOf(tesla));
