// var , char , const

var a = 10;
var a = 11;

// let b = 20;
// let b = 21;

const PI = 3.14;
// PI = 3.14159; // This will throw an error because PI is a constant


// scope (global, functional, block)

// Global scope
var a = 12;

//functional scope
function abcd() {
    var a = 13;
}

// Block scope -> avoid to use var in block scope because it will not respect block scope
{
    // var a = 15; // This will not create a new variable in block scope
    let b = 14;
}


// reassignment ans redeclaration

// Reassignment is allowed for var and let, but not for const
var x = 10;
x = 20;
let y = 30;
y = 40;

// Redeclaration is allowed for var, but not for let and const
var x = 50; // This is allowed
//let y = 60; // This is not allowed


//Temporary Dead Zone (TDZ)
console.log(z); 
let z = 70; 


// Hoisting impact per type
var a = 10; 

var a = undefined;
a = 10;