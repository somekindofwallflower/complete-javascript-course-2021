"use strict";

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
