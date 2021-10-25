'use strict'

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
};

console.log('jonasObject', jonasObject);

// Dot notation
console.log(jonasObject.firstName);

//Bracket notation
console.log(jonasObject['firstName']);

const nameKey = 'Name';
console.log(jonasObject[`last${nameKey}`]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends')
console.log(jonasObject[interestedIn]);


if (jonasObject[interestedIn]) {
    console.log(`${interestedIn}: ${jonasObject[interestedIn]}`);
} else {
    console.log('Wrong request!  Choose between firstName, lastName, age, job and friends!')
}


jonasObject.location = 'Portugal';
jonasObject['twitter'] = '@jonasschmedtman'

console.log('jonasObject', jonasObject);

//Challenge
// "Jonas has 3 friends, and his best friend is called Michael

console.log(`${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friends is ${jonasObject.friends[0]}`)
