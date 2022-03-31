"use strict";

const currencies = new Map([
    ["USD", "United States Dollar"],
    ["EURO", "Euro"],
    ["GBP", "Pound Sterling"]
]);

// ----- For Each -----
currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`)
})

// ----------- Set -----------
const currenciesUnique = new Set(['USD', 'EURO', 'GBP', 'EURO', 'USD'])
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key) {
    console.log(`${key}: ${value}`)
})
