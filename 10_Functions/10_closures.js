"use strict";

const secureBooking = function() {
    let passengerCount = 0;


    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }

}


const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
