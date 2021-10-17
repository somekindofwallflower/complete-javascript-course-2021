// Conditional ternary

const age = 23;
age >= 18 ? console.log("I like to drink wine!") : console.log("I like to drink water!");

const drink = age >= 18 ? 'wine' : 'water';
console.log(`I like to drink ${drink}!`);

let drink2;

if (age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
}

console.log(`I like to drink ${drink2}!`)
