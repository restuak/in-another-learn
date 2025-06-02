//EXERCISE 1

//Create a function that can create a triangle pattern according to the height we provide like the following :
//01
//02 03
//04 05 06
//07 08 09 10
///Parameters : height → triangle height
function segi3(height) {
  let angka = 1;
  for (let a = 1; a <= height; a++) {
    let baris = "";
    for (let b = 1; b <= a; b++) {
      baris += angka.toString().padStart(2, "0") + " ";
      angka++;
    }
    console.log(baris.trim());
  }
}
segi3(1);
segi3(4);

//EXERCISE 2

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
//"FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
function x(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
x(6);
x(15);

// EXERCISE 3
// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”z

function calbmi(w, h) {
  const bmi = w / (h ^ 2);
  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}
console.log(calbmi(60, 1.65));
console.log(calbmi(77, 1.55));
console.log(calbmi(55, 1.95));
console.log(calbmi(84, 1.6));

// EXERCISE 4
//Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

// EXERCISE 5
//Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]
function pisah(str) {
  return str.split(" ");
}
console.log(pisah("Coba pisah kalimat ini menjadi array"));
