function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve({ name: "John", URL: "www.google.com" });
      reject(new Error("Failed to fetch data")); // why used new error here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
    }, 4000);
  });
}
// fetchUserData.then().catch(); but there is a better way to do it

async function getUserData() {
  try {
    console.log(`fetching data`);
    const data = await fetchUserData();
    console.log(`fetched data`);
    console.log(`User Data:`, data); // Properly log the object
  } catch (error) {
    console.error(`Error occurred:`, error); // Use console.error for errors
  }
}
getUserData();
