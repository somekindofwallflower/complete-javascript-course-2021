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

const eurowings = {
    name: "Eurowings",
    iataCode: "EW",
    bookings: [],
}

const book = lufthansa.book;

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
}

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven Williams");
console.log(eurowings);


const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23
console.log(addVAT(100));
console.log(addVAT(23));


const addTaxRate = function(rate) {
    return function (value) {
        return value + value * 0.23
    }
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));
