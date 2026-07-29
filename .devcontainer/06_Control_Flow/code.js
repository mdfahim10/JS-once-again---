// =======================================================
//               JAVASCRIPT CONTROL FLOW
// =======================================================

// User Information
let age = 20;
let marks = 82;
let isLoggedIn = true;
let hasID = true;
let city = "";
let payment = null;
let role = "admin";


// =======================================================
// 1. if Statement
// =======================================================

if (age >= 18) {
    console.log("Eligible to vote");
}


// =======================================================
// 2. if...else
// =======================================================

if (marks >= 40) {
    console.log("Pass");
}
else {
    console.log("Fail");
}


// =======================================================
// 3. else if Ladder
// =======================================================

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else {
    console.log("Grade D");
}


// =======================================================
// 4. Comparison Operators
// =======================================================

console.log(age > 18);
console.log(age >= 18);
console.log(age < 18);
console.log(age == "20");
console.log(age === "20");
console.log(age != 30);


// =======================================================
// 5. Logical AND (&&)
// =======================================================

if (isLoggedIn && hasID) {
    console.log("Entry Allowed");
}


// =======================================================
// 6. Logical OR (||)
// =======================================================

let isAdmin = false;

if (isAdmin || isLoggedIn) {
    console.log("Access Granted");
}


// =======================================================
// 7. Logical NOT (!)
// =======================================================

if (!isAdmin) {
    console.log("Not an Admin");
}


// =======================================================
// 8. Nested if
// =======================================================

if (isLoggedIn) {

    if (marks >= 80) {
        console.log("Scholarship Eligible");
    }

}


// =======================================================
// 9. Truthy & Falsy
// =======================================================

if (city) {
    console.log("City Entered");
}
else {
    console.log("City is Empty");
}


// =======================================================
// 10. Nullish Coalescing Operator
// =======================================================

let finalPayment = payment ?? "Cash";

console.log(finalPayment);


// =======================================================
// 11. Ternary Operator
// =======================================================

let result = marks >= 40 ? "Pass" : "Fail";

console.log(result);


// =======================================================
// 12. Switch Statement
// =======================================================

switch (role) {

    case "admin":
        console.log("Full Access");
        break;

    case "teacher":
        console.log("Teacher Panel");
        break;

    case "student":
        console.log("Student Panel");
        break;

    default:
        console.log("Guest User");

}


// =======================================================
// End
// =======================================================