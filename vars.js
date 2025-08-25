//Variables and Data Types in JavaScript

// 1. Number: for integers and floating-point numbers
let age = 25; // integer
let price = 19.99; // floating-point number

// 2. String: for text
let name = "Alice";
let greeting = 'Hello, world!';

// 3. Boolean: true or false values
let isActive = true;
let isComplete = false;

// 4. Undefined: a variable declared but not assigned a value
let notAssigned;

// 5. Null: an explicit "no value"
let emptyValue = null;

// 6. Object: for collections of properties
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// 7. Array: a special type of object for ordered lists
let colors = ["red", "green", "blue"];

// Difference between let and const:

// 'let' allows reassignment:
let x = 10;
x = 20; // OK

// 'const' does NOT allow reassignment:
const y = 30;
// y = 40; // Error: Assignment to constant variable

// However, for objects/arrays declared with 'const', their contents can be changed:
const arr = [1, 2, 3];
arr.push(4); // OK

const obj = { a: 1 };
obj.a = 2; // OK

// to print variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Active:", isActive);
console.log("Person:", person);
console.log("Colors:", colors);

console.log("X :", x);
console.log("Array:", arr);

let firstName = "Jane";
let lastName = "Smith";

// String concatenation using +
let fullName = firstName + " " + lastName;
console.log("Full Name :", fullName);


// Summary: 
// Use 'let' for variables that will change,
// Use 'const' for variables that should remain constant.