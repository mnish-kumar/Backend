//Data Types in JavaScript

//Primitive data types
let nmbr = 42; // Number

let str = "Hello, World!"; // String
let char = 'M'

let bool = true; // Boolean

let nullVal = null; // Null

let undefinedVal; // Undefined

let symbolVal = Symbol("unique"); // Symbol

let bigIntVal = BigInt(9007199254740995n); // BigInt

console.log(Number.MAX_SAFE_INTEGER);

console.log(typeof char) // type pta karne ke tarika
console.log(typeof undefinedVal);

// Reference types
let array = [1, 2, 3, 4, 5]; // Array

let object = { name: "Alice", age: 30 }; // Object

let functionValue = function() { return "I am a function"; }; // Function




// Dynamic typing

let x = 10;
x = true;
x = undefined;
x = "manish";
x = null;
x = Symbol("dynamic");



// Type coercion
let a = 5;
a = a + "5"; // Implicit coercion to string
console.log(a); // "55"


// (== vs ===)
console.log(!!null);
console.log(!!undefined);
console.log(!!0);
console.log(!!NaN);
console.log(!!"");
console.log(!!"Hello");
console.log(!!false);
console.log(!!true);
console.log(!!document.all);
