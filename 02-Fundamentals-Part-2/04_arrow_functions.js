'use strict';

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1994));

const yearsUntilRetirement1 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement1(1991, 'Jonas'));
console.log(yearsUntilRetirement1(1980, 'Bob'));
