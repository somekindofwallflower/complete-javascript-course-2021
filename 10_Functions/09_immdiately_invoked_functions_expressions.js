"use strict";

const runOnce = function() {
    console.log("This will never run again");
}

runOnce();

//Immediately invoked function expression
(function() {
    console.log("This will never run again");
    const isPrivate = 23;
})();

// Do not have access inside function scope so it is going to display an error
// console.log(isPrivate);

// Arrow function
(() => console.log("This will never run again"))();


{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate); // Gives an error
console.log(notPrivate);
