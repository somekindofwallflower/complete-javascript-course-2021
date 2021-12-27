"use strict";

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;


// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
function addDecl(a, b) {
    return a+ b;
}

const addExpr = function(a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example
if(!numProducts) deleteShoppingCard();
var numProducts = 10;
function deleteShoppingCard() {
    console.log("All products deleted!");
}


var x = 1;
let y = 1;
const z = 1;

console.log( x === window.x);
console.log( y === window.y);
console.log( z === window.z);
