// Demonstrates all main function types in JavaScript
 

// 1. Function Declaration
function add(a, b) {
    return a + b;
}

// 2. Function Expression
const subtract = function(a, b) {
    return a - b;
};

// 3. Arrow Function Expression
const multiply = (a, b) => a * b;

// 4. One parameter arrow function (no parentheses needed)
const square = x => x * x;

// 5. No parameter arrow function
const addRandomNumbers = () => 3 + 4;

// Usage examples
console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(3, 4)); // 12
console.log(divide(10, 2)); // 5
console.log(square(5)); // 25
console.log(addRandomNumbers()); // 7