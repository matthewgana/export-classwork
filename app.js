// app.js

const { add, divide } = require("./calculator");
const message = require("./message");

console.log(message);

console.log("Addition:", add(10, 5));
console.log("Division:", divide(10, 2));