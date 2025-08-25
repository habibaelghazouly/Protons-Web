const prompt = require("prompt-sync")();

// Import the prompt-sync module to enable synchronous user input from the console
let name = prompt("Enter your name: ");
console.log(`Hello, ${name}!`);