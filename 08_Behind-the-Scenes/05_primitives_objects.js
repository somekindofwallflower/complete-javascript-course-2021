"use strict";

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);


const me = {
    name: "Jonas",
    age: 30
}

const friend = me;
friend.age = 27;

console.log('Friend', friend);
console.log('Me', me);


// Primitive and objects in practise

//Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log("Last name", lastName);
console.log("Old Last Name", oldLastName);


// Reference types
const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27
}
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);

// marriedJessica = {};

// Copying objects (shallow copy)
const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);
