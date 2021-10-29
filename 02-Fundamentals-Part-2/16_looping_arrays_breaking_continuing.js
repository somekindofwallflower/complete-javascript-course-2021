'use strict'

// ----------------- FOR LOOPS IN ARRAYS --------------
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

// Looping through array data using for loop
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i])
  types[i] = typeof jonasArray[i];
  // types.push(typeof jonasArray[i])
  // types.unshift(typeof jonasArray[i])
}

console.log('Types array', types)

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log('Ages',ages);


// --------------- CONTINUE AND BREAK -------------

console.log('---------ONLY STRINGS---------')
for (let i = 0; i < jonasArray.length; i++) {
  if(typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i], typeof jonasArray[i])
}



console.log('---------BREAK WITH NUMBER---------')
for (let i = 0; i < jonasArray.length; i++) {
  if(typeof jonasArray[i] === 'number') break;
  console.log(jonasArray[i], typeof jonasArray[i])
}