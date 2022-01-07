'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
const openingHours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
}
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
    openingHours
};
// Property KEYS - Object.keys(object)
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open on ${properties.length} days: `
for(const day of Object.keys(openingHours)) {
    openStr += `${day} `
}
console.log(openStr);

// Property VALUES - Object.values(openingHours)
const values = Object.values(openingHours);
console.log(values);

// Entire Property - Object.entries(openingHours)
const entries = Object.entries(openingHours);
console.log(entries)

for(const [key, value] of entries) {
    console.log(`On ${key} we open at ${value.open} and close ate ${value.close}`)
}
