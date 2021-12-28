"use strict";
console.log(this);

// In strict mode - inside regular function **this** object is going to be undefined
// In non strict mode **this** object is going to be the window object
const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAge(1991);


// In strict mode - inside arrow function **this** object is going to be window object
// In arrow function it uses the this object of parent function
const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAgeArrow(1994);


const jonas = {
    year: 1991,
    calcAge: function() {
        // Jonas object
        console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAge();


const matilda = {
    year: 2017,
};

// Method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// f();
