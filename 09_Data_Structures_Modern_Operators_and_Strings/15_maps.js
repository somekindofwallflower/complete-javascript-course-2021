"use strict";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
const openingHours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
}
// Map is a data structure that we use to map values to keys - keys can be any type

// 1. Create a map
const rest = new Map();
console.log(rest);

// 2. Add elements to map using set method
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
rest
    .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("closed", 23)
    .set(true, "We are open :D")
    .set(false, "We are closed :(")
console.log(rest);

// 3. Get the element from the map
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("closed")));

// 4. Check if a met contains a certain key
console.log(rest.has("categories"));

// 5. Delete a key from the map
rest.delete(2);
console.log(rest);

// 6. Check the size of the map
console.log(rest.size);

// 7. Delete all element in the map
rest.clear();


// Use arrays and objects as map
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector('h1'), "heading");
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));


// ------- Populate map - second way
const question = new Map(
    [
        ["question", "What is the best programming language in the world?"],
        ["1", "C"],
        ["2", "Java"],
        ["3", "JavaScript"],
        ["correct", 3],
        [true, "Correct"],
        [false, "Try again!"],
    ]
);
console.log(question);
// Covert object to map
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"))
for(const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}
const answer = Number(prompt("Your answer"));
console.log(answer);
console.log(question.get(question.get("correct") === answer));

// Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
