// promises: is a way to handle asynchronous operations in JavaScript.
// It is a way to handle asynchronous operations in JavaScript.

function fetchData() {
  //   return new Promise(() => {});
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Data fetching failed");
      }
    }, 3000);
  });
}
// let response = fetchData();
// console.log(response);

// now we'll see how to consume promises
// fetchData() //in case of data, error you can name it anything
//   .then((data) => console.log(data)) // resolve is associated with then
//   .catch((error) => console.error(error)); // reject is associated with catch/error

fetchData()
  .then((data) => {
    console.log(data);
    return data.toUpperCase();
  })
  .then((myvalue) => {
    console.log(myvalue);
  })
  .catch((error) => {
    console.log(error);
  });
