console.log("Conversion b/w data-types.");

let score = 33;
console.log(typeof score);


// here the change
score = "33";
console.log(typeof score);


// String into Number use wrapper name of number
let valueInNumber = Number(score);  
console.log(typeof valueInNumber);

let age = "manish";
let ConvertInNUmber = Number(age);
console.log(ConvertInNUmber);
// o/p -> NaN


//Boolean conversion
let loggedIN = 1;
let booleanLoggedIN = Boolean(loggedIN);
console.log(booleanLoggedIN);
// 0 -> false , 1 -> true


loggedIN = "manish";
booleanLoggedIN = Boolean(loggedIN);
console.log(booleanLoggedIN);


// In empty case string op is false but value in sgtring true;
loggedIN = "";
booleanLoggedIN = Boolean (loggedIN);
console.log(booleanLoggedIN);

