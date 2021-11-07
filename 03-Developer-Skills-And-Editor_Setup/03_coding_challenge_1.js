"use strict";

// Developer Skills & Editor Setup Coding Challenge 

// #1 Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
// Example:[17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:
// 1.Create a function 'printForecast'which takes in an array 'arr'and logs a string like the above to the console. Try it with both test datasets.
// 2.Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// Test data:
// §Data1: [17, 21, 23]
// §Data2: [12, 5, -5, 0, 4]

// GOOD LUCK 😀


// 1) Understand the problem

// - How to loop through array elements?
// - How to compute string for each element, check that result string finishes with ...?
// - How to concat small strings in one string?


// 2) Breaking up into sub-problems

// - create a variable to store final string
// - Loop through elements
// - Compute string for every element - Days should be the index of element + 1 since the loop starts from 0
// - Concat strings
// - Calculate the result outside the loop with (space)(three dots) ... and return result

const printForecast = (arr) => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  result += `...`;
  return result;
}

console.log("Test data 1", printForecast([17, 21, 23]));
console.log("Test data 2", printForecast([12, 5, -5, 0, 4]))