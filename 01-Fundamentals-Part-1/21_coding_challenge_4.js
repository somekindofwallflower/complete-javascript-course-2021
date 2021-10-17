// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:

// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

// Test data:

// Data 1: Test for bill values 275, 40 and 430
// Hints:
// To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀

const testValue1 = 275;
const testValue2 = 40;
const testValue3 = 430;

const tip1 = testValue1 >= 50 && testValue1 <=300 ? (testValue1 * 15)/100 : (testValue1 * 20)/100;
const tip2 = testValue2 >= 50 && testValue2 <=300 ? (testValue2 * 15)/100 : (testValue2 * 20)/100;
const tip3 = testValue3 >= 50 && testValue3 <=300 ? (testValue3 * 15)/100 : (testValue3 * 20)/100;

console.log(`The bill was ${testValue1}, the tip was ${tip1}, and the total value ${testValue1 + tip1}`)
console.log(`The bill was ${testValue2}, the tip was ${tip2}, and the total value ${testValue2 + tip2}`)
console.log(`The bill was ${testValue3}, the tip was ${tip3}, and the total value ${testValue3 + tip3}`)
