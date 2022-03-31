"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for(const[index, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement: ${index}: You deposit ${movement}`)
    } else {
        console.log(`Movement: ${index}: You withdraw ${Math.abs(movement)}`)
    }
}

console.log("------FOREACH------");
movements.forEach(function(movement, index, movements) {
    console.log(`Movements ${movements}`)
    if (movement > 0) {
        console.log(`Movement: ${index}: You deposit ${movement}`)
    } else {
        console.log(`Movement: ${index}: You withdraw ${Math.abs(movement)}`)
    }
});

// 0: function(200
// 1: function(450)
// 2: function(-400)
// ...






