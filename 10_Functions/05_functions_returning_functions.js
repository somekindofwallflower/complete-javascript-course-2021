"use strict";

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet("Hey");
greeterHey("Jonas"); // Hey Jonas
greeterHey("Steven"); // Hey Steven

greet("Hello")("Jonas");


// Writing the functions above using arrow functions

const greetArrowFn = greeting => name => console.log(`${greeting} ${name}`);
greetArrowFn("Hello")("Wallflower");
