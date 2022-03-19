"use strict";

// Array functions are functions that are attached to all arrays that we create in javaScript

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - return new array
let sliceArray = arr.slice(2);
let sliceArray2 = arr.slice(2, 4);
let sliceArray3 = arr.slice(-2);
let sliceArray4 = arr.slice(-1);
let sliceArray5 = arr.slice(1, -2);
console.log(sliceArray);
console.log(sliceArray2);
console.log(sliceArray3);
console.log(sliceArray4);
console.log(sliceArray5);

// We can use slice to create a shallow copy of an array
console.log(arr.slice())

// SPLICE - Mutate the original arrays
console.log(arr.splice(2));
// Remove last element of the array
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);


// REVERSE - mutate the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT - does not mutate the original array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));
