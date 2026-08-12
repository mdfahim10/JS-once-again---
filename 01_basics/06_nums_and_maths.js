

console.log("========== NUMBER ==========\n");

// Creating Numbers
let a = 100;
let b = 99.99;
let c = new Number(50);

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);

console.log("\nType:");
console.log(typeof a);
console.log(typeof b);
console.log(typeof c); // object

// ---------------------------------------------------------
// Special Values
// ---------------------------------------------------------

console.log("\nSpecial Values:");

console.log(5 / 0);          // Infinity
console.log(-5 / 0);         // -Infinity
console.log("Hello" * 5);    // NaN
console.log(0 / 0);          // NaN

// ---------------------------------------------------------
// Number Methods
// ---------------------------------------------------------

let num = 123.456789;

console.log("\nNumber Methods:");

console.log(num.toString());
console.log(num.toFixed(2));
console.log(num.toPrecision(5));
console.log(c.valueOf());

// ---------------------------------------------------------
// Number Conversion
// ---------------------------------------------------------

console.log("\nNumber Conversion:");

console.log(Number("100"));
console.log(Number("100abc"));

console.log(parseInt("123px"));
console.log(parseInt("99.99"));

console.log(parseFloat("99.99px"));

// ---------------------------------------------------------
// Checking Numbers
// ---------------------------------------------------------

console.log("\nChecking Numbers:");

console.log(isNaN("Hello"));
console.log(isNaN("100"));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("Hello"));

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

console.log(Number.isFinite(100));
console.log(Number.isFinite(Infinity));

// ---------------------------------------------------------
// Number Properties
// ---------------------------------------------------------

console.log("\nNumber Properties:");

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// ---------------------------------------------------------
// Arithmetic Operators
// ---------------------------------------------------------

let x = 10;
let y = 3;

console.log("\nArithmetic:");

console.log("Addition =", x + y);
console.log("Subtraction =", x - y);
console.log("Multiplication =", x * y);
console.log("Division =", x / y);
console.log("Modulus =", x % y);
console.log("Exponent =", x ** y);

// ---------------------------------------------------------
// Type Conversion
// ---------------------------------------------------------

console.log("\nType Conversion:");

console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);
console.log(true + 5);
console.log(false + 5);

// ---------------------------------------------------------
// Floating Point Issue
// ---------------------------------------------------------

console.log("\nFloating Point:");

console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(1));

// =========================================================
// MATH OBJECT
// =========================================================

console.log("\n\n========== MATH ==========\n");

// ---------------------------------------------------------
// Math Properties
// ---------------------------------------------------------

console.log("Math Properties:");

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

// ---------------------------------------------------------
// Math Methods
// ---------------------------------------------------------

console.log("\nMath Methods:");

console.log("round =", Math.round(4.6));
console.log("floor =", Math.floor(4.9));
console.log("ceil =", Math.ceil(4.1));
console.log("trunc =", Math.trunc(4.9));

console.log("abs =", Math.abs(-100));

console.log("sqrt =", Math.sqrt(64));

console.log("pow =", Math.pow(2, 5));

console.log("max =", Math.max(10, 25, 15, 50));

console.log("min =", Math.min(10, 25, 15, 50));

// ---------------------------------------------------------
// Random Numbers
// ---------------------------------------------------------

console.log("\nRandom Numbers:");

console.log("0 to 1 =", Math.random());

console.log(
    "0 to 9 =",
    Math.floor(Math.random() * 10)
);

console.log(
    "1 to 10 =",
    Math.floor(Math.random() * 10) + 1
);

console.log(
    "1 to 100 =",
    Math.floor(Math.random() * 100) + 1
);

console.log(
    "50 to 100 =",
    Math.floor(Math.random() * 51) + 50
);

// ---------------------------------------------------------
// Mini Examples
// ---------------------------------------------------------

console.log("\nMini Examples:");

// Area of Circle
let radius = 7;
let area = Math.PI * radius * radius;

console.log("Area =", area.toFixed(2));

// Square Root
let number = 144;
console.log("Square Root =", Math.sqrt(number));

// Power
console.log("2^10 =", Math.pow(2, 10));

// Largest Number
console.log(Math.max(5, 15, 25, 35));

// Smallest Number
console.log(Math.min(5, 15, 25, 35));

// Absolute Difference
let p = 20;
let q = 45;

console.log("Absolute Difference =", Math.abs(p - q));

// ---------------------------------------------------------
// OTP Generator (6 Digit)
// ---------------------------------------------------------

let otp = Math.floor(Math.random() * 900000) + 100000;

console.log("\nOTP =", otp);

// ---------------------------------------------------------
// Dice Roll
// ---------------------------------------------------------

let dice = Math.floor(Math.random() * 6) + 1;

console.log("Dice =", dice);

// ---------------------------------------------------------
// Coin Toss
// ---------------------------------------------------------

let coin = Math.random() < 0.5 ? "Heads" : "Tails";

console.log("Coin =", coin);

// ---------------------------------------------------------
// Random Password Character
// ---------------------------------------------------------

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let randomChar =
chars[Math.floor(Math.random() * chars.length)];

console.log("Random Character =", randomChar);

// =========================================================
// END
// =========================================================

console.log("\n========== END ==========");