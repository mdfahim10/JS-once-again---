let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


let j = 5;

do {
    console.log(j);
    j--;
} while (j >= 1);


let sum = 0;
let n = 1;

do {
    sum += n;
    n++;
} while (n <= 10);

console.log(sum);


let num = 5;
let factorial = 1;

do {
    factorial *= num;
    num--;
} while (num >= 1);

console.log(factorial);


let table = 7;
let i = 1;

do {
    console.log(`${table} x ${i} = ${table * i}`);
    i++;
} while (i <= 10);


let arr = [10, 20, 30, 40, 50];
let index = 0;

do {
    console.log(arr[index]);
    index++;
} while (index < arr.length);


let str = "JavaScript";
let index = 0;

do {
    console.log(str[index]);
    index++;
} while (index < str.length);


let numbers = [10, 15, 20, 25, 30];
let i = 0;
let sum = 0;

do {
    sum += numbers[i];
    i++;
} while (i < numbers.length);

console.log(sum);


let i = 1;

do {
    if (i === 6) {
        break;
    }

    console.log(i);
    i++;
} while (i <= 10);


let i = 0;

do {
    i++;

    if (i === 6) {
        continue;
    }

    console.log(i);
} while (i < 10);


let i = 1;

do {
    let j = 1;

    do {
        console.log(i, j);
        j++;
    } while (j <= 3);

    i++;
} while (i <= 3);


let num = 17;
let i = 2;
let isPrime = true;

do {
    if (num % i === 0) {
        isPrime = false;
        break;
    }

    i++;
} while (i < num);

console.log(isPrime);


let count = 1;
let a = 0;
let b = 1;

do {
    console.log(a);

    let c = a + b;
    a = b;
    b = c;

    count++;
} while (count <= 10);


let number = 12345;
let reverse = 0;

do {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
} while (number > 0);

console.log(reverse);


let number = 12345;
let sum = 0;

do {
    let digit = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
} while (number > 0);

console.log(sum);


let number = 0;

do {
    console.log("This runs at least once");
    number++;
} while (number > 0 && number < 1);


let password = "";
let attempts = 0;

do {
    attempts++;
    password = "1234";
} while (password !== "1234" && attempts < 3);

console.log("Password accepted");


let choice;

do {
    choice = 3;

    if (choice === 1) {
        console.log("Option 1");
    } else if (choice === 2) {
        console.log("Option 2");
    } else if (choice === 3) {
        console.log("Exit");
    }
} while (choice !== 3);