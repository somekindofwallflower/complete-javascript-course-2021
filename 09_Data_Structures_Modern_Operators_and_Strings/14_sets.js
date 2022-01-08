"use strict"

// Set is a collection of unique values
 const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"]);
console.log("Orders Set", ordersSet);
console.log(new Set("Jonas"));

// 1. Get the size of the set
console.log(ordersSet.size);

// 2. Check if an element is in the set
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// 3. Add new element to a set
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
// Check if the Garlic bread is add only once
console.log(ordersSet);

// 4. Delete an element from the set
ordersSet.delete("Risotto");
// Check if the Risotto is deleted
console.log(ordersSet);

// NOTE: Retrieve data from set - Sets do not have indexes
// There is no way of retrieving data from a set since the sets do not have
// duplicated an order does not matter the only thing in which we are interested
// is to know whether a value is or not in the set

// 5. Delete all the elements of the set
// ordersSet.clear();

// Loop over sets
for (const order of ordersSet) console.log(order);

// Example

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);

// Conversion from set to array - use destructuring - destructuring can be used on iterables
console.log([...staffUnique]);
console.log("Unique positions are", staffUnique.size);
console.log(new Set("jonassschmedtmann").size);
