"use strict";


function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // Creating NEW  variable with same name as outer scope's variable.
            const firstName = "Steven";
            // Reassigning out scope's variable
            output = 'NEW OUTPUT'
            const str = `oh, and you're a millenial, ${firstName}`
            console.log(str);
            function add(a, b) {
                return a + b;
            }
        }
        // console.log('str', str);
        // add(2, 3);
        console.log('millenial', millenial);
        console.log('output', output);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// console.log(printAge());
