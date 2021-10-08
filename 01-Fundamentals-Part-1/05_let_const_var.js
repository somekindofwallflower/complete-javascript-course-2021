// Three different ways to declare variables in javascript

// mutable variable - use let
let age = 30;
age = 31;

// immutable variable - use const
const birthYear = 1991;

// Is going to throw an error
// birthYear = 1990;

// Throws an error: Missing initializer in const declaration
// const job;

var job = "Programmer";
job = "Teacher";

//Difference between let and var is that let is block scope while var is function scope

lastName = "Schmedtmann";
console.log(lastName);

{
    let y = "yes";
    // console.log(x);
    let x = "Cooler";
    hacky = "Great!";
    if (true) {
        let x;
        console.log(x);
        x = "Fancy";
        // let x = "Fancy";
        console.log(x);

    }
    console.log(x);
}

console.log(y);

let peter = "Hero!";


