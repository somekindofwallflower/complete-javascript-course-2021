//Equality operators

const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just become an adult :D (loose)');

const favouriteNumber = Number(prompt("Whats your favourite number?"));
const favouriteString = prompt("Whats your favourite number?");
console.log(typeof favouriteNumber); // eg.23
console.log(typeof favouriteString); // eg.'23'

if (favouriteString == 23) { // '23' == 23
    console.log('Cool 23 is an amazing number');
}

if (favouriteString === 23) { // '23' === 23
    console.log('Cool 23 is an amazing number');
}


if (favouriteNumber === 23) { // '23' === 23
    console.log('Cool 23 is an amazing number');
} else if (favouriteNumber === 7) {
    console.log("7 is also a cool number");
} else {
    console.log('Number is not 23 or 7')
}


if (favouriteNumber !== 23) {
    console.log('Why not 23?');
}
