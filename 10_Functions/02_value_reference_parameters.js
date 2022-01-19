"use strict";

const flight = "LH234";
const jonas = {
    name: "Jonas Schimedtmann",
    passport: 23739479284
}

const checkIn = function(flightNum, passanger) {
    flightNum = "LH999";
    passanger.name = "Mr." + passanger.name;

    if (passanger.passport === 23739479284) {
        alert("Check in");
    } else {
        alert("Wrong passport");
    }
}
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}


newPassport(jonas);
checkIn(flight, jonas)

