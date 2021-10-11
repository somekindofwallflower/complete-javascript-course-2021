//Taking decision if/else statement


const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license 🚗")
} else {
    const yearsLeft = 18 - age
    console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
}


const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
