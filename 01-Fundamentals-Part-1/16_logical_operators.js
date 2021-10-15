//Logical operators

const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision); //false
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}


const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired); //true
console.log(hasDriversLicense && hasGoodVision && isTired); //false


if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
