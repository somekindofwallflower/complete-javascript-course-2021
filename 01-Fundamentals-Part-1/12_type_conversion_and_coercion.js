// Type conversion and coercion


// Type conversion
const inputYear = '1991';

console.log(Number(inputYear));
console.log(inputYear + 18); //199118
console.log(Number(inputYear) + 18); //2009

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion

console.log('I am ' + (5 + 23) + ' years old'); //I am 28 years old
console.log('I am ' + '23' + ' years old');

console.log('23' - '10' - 3); //10
console.log(25 + '1' + '1'); //10
console.log('23'*'2'); //26
console.log('24'/'2'); //12
console.log('24' > '2'); //true

let n = '1' + 1;
n = n - 1; //10
console.log(n);

console.log(23 + '10' * 2);
console.log('23' * 10 + '2');
console.log(23 + '10' - 2);



