for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

let n = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(sum);

let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(factorial);

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let total = 0;

for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}

console.log(total);

let numbers = [5, 7, 3, 19, 2];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);

let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(min);

let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        count++;
    }
}

console.log(count);

let str = "JavaScript";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

let word = "javascript";
let vowels = 0;

for (let i = 0; i < word.length; i++) {
    if (
        word[i] === "a" ||
        word[i] === "e" ||
        word[i] === "i" ||
        word[i] === "o" ||
        word[i] === "u"
    ) {
        vowels++;
    }
}

console.log(vowels);

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += j;
    }

    console.log(pattern);
}

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        continue;
    }

    console.log(i);
}

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= 10; i++) {
    let c = a + b;

    console.log(c);

    a = b;
    b = c;
}

let prime = 17;
let isPrime = true;

for (let i = 2; i < prime; i++) {
    if (prime % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);

let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log(reversed);

let target = 30;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        found = true;
        break;
    }
}

console.log(found);

let even = 0;
let odd = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log(even);
console.log(odd);

for (let i = 1, j = 10; i <= 5; i++, j--) {
    console.log(i, j);
}