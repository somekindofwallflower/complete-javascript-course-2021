"use strict";

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
}


const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name} method`);
}

transformer("JavaScript is the best", upperFirstWord);
transformer("JavaScript is the best", oneWord);

// JS uses callback all the time
const high5 = function() {
    console.log("Hi 5!")
}
document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adams"].forEach(high5); // Prints 3 time Hi 5 in the console
