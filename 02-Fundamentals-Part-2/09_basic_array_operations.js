'use strict';

// Friends array
const friends = ['Michael', 'Steven', 'Peter'];

// Adds an element to the end of the array
const friendsArrayLength = friends.push('Jay');
console.log('Friends', friends);
console.log('Friends array length', friendsArrayLength);

// Add element to the beginning of the array
friends.unshift('John');
console.log(friends);

// Remove last element of the array
const popped = friends.pop();
console.log('Length of friends array after the last element is being removed', popped)
console.log('Friends', friends);

//Remove the first element of the array
friends.shift();
console.log('Friends', friends);

// Get index of an element in an array
console.log('Index of Steven in the array', friends.indexOf('Steven'));
console.log('Index of Bob in the array', friends.indexOf('Bob'));

// Check if an element in array or not - strict check
console.log('Is Steven in friends array?', friends.includes('Steven'));
console.log('Is Bob in friends array?', friends.includes('Bob'));

if(friends.includes('Steven')) {
    console.log('You have a friends called Steven');
}
