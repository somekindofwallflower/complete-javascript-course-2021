// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";

// Condition is always false since types 'string' and 'number' have no overlap
if (x === 23) {
  console.log(23);
}

const calcAge = (birthYear) => 2037 - birthYear;
