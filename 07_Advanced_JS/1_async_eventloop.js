//few seconds timer

function sayhello() {
  console.log("hello bro");
}

setTimeout(() => {
  sayhello();
}, 5000);

console.log("start");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("end");
