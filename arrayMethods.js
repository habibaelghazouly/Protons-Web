// Demonstrates array methods: spread operator, rest operator, and destructuring.
 
// Spread Operator: Expands elements of an array
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5]

// Rest Operator: Collects remaining elements into an array
function printAll(...rest) {
    return rest;
}
const total = printAll(10, 20, 30, 40); // 20 + 30 + 40 + 10 = 100

// Destructuring: Extracts values from arrays into variables
const numbers = [100, 200, 300];
const [first, second, third] = numbers; // first=100, second=200, third=300

// Destructuring in objects , Must be same name as in object
const user = { id: 1, username: 'user1'};
const { id, username } = user; // id=1, username='user1'

// Logging results
console.log('Combined:', combined);
console.log('Sum:', total);
console.log('Destructured:', first, second, third);
console.log('User:', id, username);


// Array methods: map, filter, reduce , forEach , push
const nums = [1, 2, 3, 4, 5]; 

// map: Creates a new array with each value doubled
const doubled = nums.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter: Creates a new array with only even numbers
const evens = nums.filter(n => n % 2 === 0); // [2, 4]

// reduce: Sums all values in the array
const sum = nums.reduce((acc, n) => acc + n, 0); // 15

// forEach: Iterates over each value and accumulates the sum in totalForEach
let totalForEach = 0;
nums.forEach(n => totalForEach += n); // totalForEach = 15

// Push
nums.push(6); // nums is now [1, 2, 3, 4, 5, 6]

// Logging array method results
console.log('Doubled:', doubled);
console.log('Evens:', evens);
console.log('Sum (reduce):', sum);
console.log('Sum (forEach):', totalForEach);
console.log('Array:' , nums);

// Multiply each number by 3
let forLoopResult = [];
for (let i = 0; i < nums.length; i++) {
    forLoopResult.push(nums[i] * 3);
}
console.log('For loop (tripled):', forLoopResult);