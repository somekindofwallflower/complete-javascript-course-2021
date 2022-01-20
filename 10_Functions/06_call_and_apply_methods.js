"use strict";

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNumber, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`);
    this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name })
    }
}

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
console.log("Lufthansa", lufthansa);
const eurowings = {
    name: "Eurowings",
    iataCode: "EW",
    bookings: [],
}

const book = lufthansa.book;
// DOES NOT WORK
// book(635, "John Smith");

// Whatever we pass as first argument in the call method is this - in this way we pass manually the this keyword on the function we want to call

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);
book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
}

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Apply Method (not used in moder JavaScript
const flightData = [538, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
