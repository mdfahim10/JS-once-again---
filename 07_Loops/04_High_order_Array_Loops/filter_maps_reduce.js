// // filter()

// let numbers = [10, 15, 20, 25, 30];

// let filtered = numbers.filter(num => num > 20);

// console.log(filtered);


// // filter() with objects

// let users = [
//     { name: "Alex", age: 22 },
//     { name: "John", age: 17 },
//     { name: "Sara", age: 25 }
// ];

// let adults = users.filter(user => user.age >= 18);

// console.log(adults);


// // map()

// let nums = [1, 2, 3, 4, 5];

// let squares = nums.map(num => num * num);

// console.log(squares);


// map() with objects

let products = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

let prices = products.map(product => product.price);

console.log(prices);


// map() with index

let names = ["Alex", "John", "Sara"];

let result = names.map((name, index) => `${index + 1}. ${name}`);

console.log(result);


// reduce()

let values = [10, 20, 30, 40];

let sum = values.reduce((acc, num) => acc + num, 0);

console.log(sum);


// reduce() for product

let nums2 = [1, 2, 3, 4, 5];

let product = nums2.reduce((acc, num) => acc * num, 1);

console.log(product);


// reduce() to find maximum

let marks = [75, 92, 68, 88, 95];

let max = marks.reduce((acc, mark) => {
    return mark > acc ? mark : acc;
}, marks[0]);

console.log(max);


// reduce() with objects

let cart = [
    { item: "Laptop", price: 80000 },
    { item: "Mouse", price: 1000 },
    { item: "Keyboard", price: 2000 }
];

let total = cart.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(total);


// filter + map

let numbers2 = [10, 15, 20, 25, 30];

let result2 = numbers2
    .filter(num => num > 15)
    .map(num => num * 2);

console.log(result2);


// filter + map + reduce

let products2 = [
    { name: "Laptop", price: 80000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Phone", price: 50000 }
];

let totalPrice = products2
    .filter(product => product.price > 5000)
    .map(product => product.price)
    .reduce((total, price) => total + price, 0);

console.log(totalPrice);


// All three with callback parameters

let arr = [10, 20, 30];

arr.filter((value, index, array) => {
    console.log(value, index, array);
    return value > 10;
});

arr.map((value, index, array) => {
    console.log(value, index, array);
    return value * 2;
});

arr.reduce((acc, value, index, array) => {
    console.log(acc, value, index, array);
    return acc + value;
}, 0);