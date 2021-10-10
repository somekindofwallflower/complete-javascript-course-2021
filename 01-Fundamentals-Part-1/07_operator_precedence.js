//Operator precedence

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y)
console.log(ageJonas);
console.log(ageSarah);

const avarageAge = (ageJonas + ageSarah) / 2
console.log(avarageAge);
