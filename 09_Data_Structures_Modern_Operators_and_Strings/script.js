'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

// Storing every element in the array in different variables
const arr = [2, 3, 4];

// Solution 1
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Solution 2 with modern javascript
const [x, y, z] = arr;
console.log(x, y, z);
// The original array has not changed
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);

// We can access the elements we want by leaving an empty place (hole)

const [first, , third] = restaurant.categories;
console.log(first, third);

// Situation: Owner of the restaurant decided to switch the main and secondary category

let [main, secondary] = restaurant.categories;

// Solution 1
// console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Solution 2
[main, secondary] = [secondary, main]
console.log(main, secondary);

// Get the order only by passing the index
const [starter, main1] = restaurant.order(2, 0)
console.log(starter, main1);


// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const[p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
