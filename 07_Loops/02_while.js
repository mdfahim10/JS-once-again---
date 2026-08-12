let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

let j = 5;

while (j >= 1) {
    console.log(j);
    j--;
}

let sum = 0;
let n = 1;

while (n <= 10) {
    sum += n;
    n++;
}

console.log(sum);

let num = 5;
let factorial = 1;

while (num >= 1) {
    factorial *= num;
    num--;
}

console.log(factorial);

let table = 7;
let i = 1;

while (i <= 10) {
    console.log(`${table} x ${i} = ${table * i}`);
    i++;
}

let arr = [10, 20, 30, 40, 50];
let index = 0;

while (index < arr.length) {
    console.log(arr[index]);
    index++;
}

let str = "JavaScript";
let index = 0;

while (index < str.length) {
    console.log(str[index]);
    index++;
}

let numbers = [10, 15, 20, 25, 30];
let i = 0;
let sum = 0;

while (i < numbers.length) {
    sum += numbers[i];
    i++;
}

console.log(sum);

let i = 1;

while (i <= 10) {
    if (i === 6) {
        break;
    }

    console.log(i);
    i++;
}

let i = 0;

while (i < 10) {
    i++;

    if (i === 6) {
        continue;
    }

    console.log(i);
}

let i = 1;

while (i <= 5) {
    let j = 1;

    while (j <= 5) {
        console.log(i, j);
        j++;
    }

    i++;
}

let num = 17;
let i = 2;
let isPrime = true;

while (i < num) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }

    i++;
}

console.log(isPrime);

let n = 10;
let a = 0;
let b = 1;
let count = 1;

while (count <= n) {
    console.log(a);

    let c = a + b;
    a = b;
    b = c;

    count++;
}

let number = 12345;
let reverse = 0;

while (number > 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}

console.log(reverse);

let number = 12345;
let sum = 0;

while (number > 0) {
    let digit = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
}

console.log(sum);