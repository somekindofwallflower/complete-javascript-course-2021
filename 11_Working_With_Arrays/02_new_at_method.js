"use strict";

const arr = [23, 11, 64];
console.log(`First element at array ${arr} is ${arr[0]}`);
console.log(arr.at(0));

// Get the last element of the array in case we do not know the length of the array
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("somekindofwallflower".at(0));
