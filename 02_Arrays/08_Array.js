let fruits = ["Apple", "Banana"];

// Add at end
fruits.push("Mango");

// Add at beginning
fruits.unshift("Orange");

console.log(fruits);
// ["Orange", "Apple", "Banana", "Mango"]

// Remove last
fruits.pop();

console.log(fruits);
// ["Orange", "Apple", "Banana"]

// Remove first
fruits.shift();

console.log(fruits);
// ["Apple", "Banana"]

// Find index
console.log(fruits.indexOf("Banana"));
// 1

// Join
console.log(fruits.join(" - "));
// Apple - Banana

// Slice
console.log(fruits.slice(0, 1));
// ["Apple"]

// Splice (Replace Banana with Mango)
fruits.splice(1, 1, "Mango");

console.log(fruits);
// ["Apple", "Mango"]