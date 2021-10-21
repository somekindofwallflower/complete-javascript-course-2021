// Introduction to Arrays
'use strict';

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const years = new Array(1991, 1984, 2008, 2020);
console.log('Years array', years);

const test = new Array(2);
console.log('Type of', typeof test[0]);
console.log('Array length', test.length);

const friends = ['Michael', 'Steven', 'Peter'];
console.log('Friends array', friends);
console.log('Friend 1', friends[0]);
console.log('Friend 2',friends[1]);
console.log('Friend 3',friends[2]);
console.log('Friends array length',friends.length);

// Last element in array
console.log('Last element in array', friends[friends.length - 1]);

// Overwrite array elements
friends[2] = 'Jay';
console.log('Friends array updated', friends); // ['Michael', 'Steven', 'Jay']

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log('Jonas array', jonas);
console.log('Jonas array length', jonas.length);


// ********* Example ***********

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const y = [1990, 1967, 2002, 2010, 2018];

// console.log('Calculate age', calcAge(y));

const age1 = calcAge(y[0]);
console.log('Age 1', age1);
const age2 = calcAge(y[1]);
console.log('Age 2', age2);
const age3 = calcAge(y[2]);

console.log('Age 3', age3);

const ages = [age1, age2, age3];
console.log('Ages', ages);



