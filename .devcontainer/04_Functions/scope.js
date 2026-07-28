
// Scope determines where a variable can be accessed.

// There are mainly 4 types of scopes:
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Lexical Scope (Closures are based on this)



// 1. GLOBAL SCOPE


// Variables declared outside every function/block
// are accessible from anywhere.

let globalVar = "I am Global";

function demoGlobal() {
    console.log(globalVar);
}

demoGlobal();

console.log(globalVar);


// 2. FUNCTION SCOPE

// Variables declared inside a function
// can only be accessed inside that function.

function demoFunctionScope() {

    let username = "Alex";

    console.log(username); // Accessible
}

demoFunctionScope();

// console.log(username);
// ReferenceError: username is not defined



// 3. BLOCK SCOPE

// let and const are block scoped.
// A block is anything inside { }

{
    let a = 10;
    const b = 20;

    console.log(a);
    console.log(b);
}

// console.log(a); // Error
// console.log(b); // Error



// var is NOT Block Scoped


{
    var c = 30;
}

console.log(c); // 30



// Example with if block


if (true) {

    let marks = 95;

    console.log(marks);
}

// console.log(marks);
// ReferenceError


// Example with for loop


for (let i = 0; i < 3; i++) {
    console.log(i);
}

// console.log(i);
// Error


// 4. LEXICAL SCOPE


// Inner functions can access variables
// of the outer function.

function outer() {

    let username = "Alex";

    function inner() {

        console.log(username);
    }

    inner();
}

outer();



// Parent cannot access Child variables


function parent() {

    let parentName = "Father";

    function child() {

        let childName = "Son";

        console.log(parentName);
    }

    child();

    // console.log(childName);
    // Error
}

parent();



// Nested Functions


function one() {

    const website = "Google";

    function two() {

        const language = "JavaScript";

        console.log(website);   // Accessible
        console.log(language);
    }

    two();

    // console.log(language); // Error
}

one();


// Shadowing


// Inner variable hides outer variable.

let city = "Delhi";

function demoShadow() {

    let city = "Kolkata";

    console.log(city);
}

demoShadow();

console.log(city);



// Scope with const


const PI = 3.14;

function area(radius) {

    const result = PI * radius * radius;

    console.log(result);
}

area(5);


// Scope with var


// var is function scoped.

function demoVar() {

    if (true) {

        var x = 100;
    }

    console.log(x); // Accessible
}

demoVar();



// Scope with let


function demoLet() {

    if (true) {

        let y = 200;

        console.log(y);
    }

    // console.log(y);
    // Error
}

demoLet();


// Scope Chain


// JavaScript searches variables like:
// Local Scope
// ↓
// Parent Scope
// ↓
// Global Scope

let company = "OpenAI";

function employee() {

    function developer() {

        console.log(company);
    }

    developer();
}

employee();


// IMPORTANT INTERVIEW NOTES


// Global Scope
// Accessible everywhere.

// Function Scope
// Only inside the function.

// Block Scope
// Only inside { }.

// var
// Function Scoped
// Can be redeclared
// Can be updated

// let
// Block Scoped
// Cannot be redeclared
// Can be updated

// const
// Block Scoped
// Cannot be redeclared
// Cannot be updated



// var vs let vs const


// var
var age = 20;
var age = 21;     // Allowed
age = 22;         // Allowed

// let
let score = 50;
// let score = 60; // Error
score = 60;       // Allowed

// const
const country = "India";
// country = "USA"; // Error

