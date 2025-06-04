//EXERCISE 1
// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number
let number = 25; // Change this value to test with different numbers
if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}

// EXERCISE 2
//Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// // Example: 6 → 6 is not a prime number
let p = 25; // Change this value to test with different numbers
if (p < 2) {
  console.log(`${p} is not a prime number`);
} else {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(p); i++) {
    if (p % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${p} is a prime number`);
  } else {
    console.log(`${p} is not a prime number`);
  }
}
// EXERCISE 3
// Write a code to find the sum of the numbers 1 to N
// // Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 6
let n = 5; // Change this value to test with different numbers
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(`The sum of numbers from 1 to ${n} is ${sum}`);
// EXERCISE 4
// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
let factorialNumber = 4; // Change this value to test with different numbers
let factorial = 1;
for (let i = 1; i <= factorialNumber; i++) {
  factorial *= i;
}
console.log(`${factorialNumber}! = ${factorial}`);
// EXERCISE 5
// Write a code to print the first N fibonacci numbers
// Example: 15 → 610
let fibonacciCount = 15; // Change this value to test with different numbers
let a = 0,
  b = 1,
  nextTerm;
console.log(`Fibonacci series up to ${fibonacciCount} terms:`);
for (let i = 1; i <= fibonacciCount; i++) {
  console.log(a);
  nextTerm = a + b;
  a = b;
  b = nextTerm;
}
