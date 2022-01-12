"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// Get the position in which a letter is inside a string
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
// Index of is case-sensitive
console.log(airline.lastIndexOf('Portugal'));

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(" "))); //TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //Portugal

console.log(airline.slice(-2)); // Start from the end of the string, result: al
console.log(airline.slice(1, -1)); // AP Air Portuga

// Write a function which takes as a parameter a seat and return if it is a middle seat or not
// B and E are middle seats

const checkMiddleSeat = function (seat) {
// B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') {
        console.log("You got the middle seat");
    } else {
        console.log("You got lucky seat")
    }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Wherever we call a method to a string javascript behind the scenes convert this string to an object and when the
// operation is over javascript convert back the string object to a primitive

console.log(new String("jonas"));
console.log(typeof new String("jonas")); //object
console.log(typeof new String("jonas").slice(1)); //string

