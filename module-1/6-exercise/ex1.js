//EXERCISE 1
//==================================================
//1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
//a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
function getArrayStats(arr) {
    const lowest = Math.min(...arr);
    const highest = Math.max(...arr);
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    return { lowest, highest, average: parseFloat(average.toFixed(2)) };
}
console.log(getArrayStats([12, 5, 23, 18, 4, 45, 32])); // Output: { lowest: 4, highest: 45, average: 19.8 }


//2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
//a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
function concatenateWords(arr) {
    if (arr.length === 0) return '';
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return arr.join(' and ');
    return arr.slice(0, -1).join(', ') + ', and ' + arr[arr.length - 1];
}
console.log(concatenateWords(["apple", "banana", "cherry", "date"])); // Output: "apple, banana, cherry, and date"


//3. Write a function from a given array of numbers and return the second smallest number
//a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
function secondSmallest(numbers) {
    if (numbers.length < 2) return null; // Not enough elements
    const uniqueNumbers = [...new Set(numbers)]; // Remove duplicates
    if (uniqueNumbers.length < 2) return null; // Still not enough unique elements
    uniqueNumbers.sort((a, b) => a - b); // Sort the array
    return uniqueNumbers[1]; // Return the second smallest
}
console.log(secondSmallest([5, 3, 1, 7, 2, 6])); // Output: 2


//4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
//a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
function addArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) throw new Error("Arrays must be of the same length");
    return arr1.map((num, index) => num + arr2[index]);
}
console.log(addArrays([1, 2, 3], [3, 2, 1])); // Output: [4, 4, 4]


//5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
function addUniqueElement(arr, newElement) {
    if (!arr.includes(newElement)) {
        arr.push(newElement);
    }
    return arr;
}
console.log(addUniqueElement([1, 2, 3, 4], 4)); // Output: [1, 2, 3, 4]
function addUniqueElement(arr, newElement) {
    if (!arr.includes(newElement)) {
        arr.push(newElement);
    }
    return arr;
}
console.log(addUniqueElement([1, 2, 3, 4], 7)); // Output: [1, 2, 3, 4, 7]


//EXERCISE 2
//==================================================
//1. Write a function from a given array of mixed data types and return the sum of all the number
//a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
function sumOfNumbers(mixedArray) {
    return mixedArray.reduce((sum, item) => {
        if (typeof item === 'number') {
            return sum + item;
        } else if (typeof item === 'string' && !isNaN(item)) {
            return sum + parseFloat(item);
        }
        return sum;
    }, 0);
}
console.log(sumOfNumbers(["3", 1, "string", null, false, undefined, 2])); // Output: 3


//2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
//a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]
function insertToArray(maxSize, ...integers) {
    const arr = [];
    for (const num of integers) {
        if (arr.length < maxSize) {
            arr.push(num);
        } else {
            break; // Stop adding if max size is reached
        }
    }
    return arr;
}
console.log(insertToArray(5, 5, 10, 24, 3, 6, 7, 8)); // Output: [5, 10, 24, 3, 6]

//3. Write a function that will combine 2 given array into one array
//a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]

//4. Write a function to find duplicate values in an array
//a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
function findDuplicates(arr) {
    const counts = {};
    const duplicates = [];

    arr.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    for (const num in counts) {
        if (counts[num] > 1) {
            duplicates.push(parseInt(num, 10));
        }
    }

    return duplicates;
}
console.log(findDuplicates([1, 2, 2, 2, 3, 3, 4, 5, 5])); // Output: [2, 3, 5]

//5. Write a function to find the difference in 2 given array
//. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] 
function findDifference(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    
    const difference1 = arr1.filter(item => !set2.has(item));
    const difference2 = arr2.filter(item => !set1.has(item));
    
    return [...difference1, ...difference2];
}
console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // Output: [1, 2, 6, 7]

// EXERCISE 3
//==================================================
//1. Based on the array below write a function that will return primitive data types only. let arr = [1, [], undefined, {}, "string", {}, []];
//a. The function will return [1, undefined, “string”]
function getPrimitiveTypes(arr) {
    return arr.filter(item => typeof item !== 'object' || item === null);
}
console.log(getPrimitiveTypes([1, [], undefined, {}, "string", {}, []])); // Output: [1, undefined, "string"]

//2. Write a function from the below array of number that will return sum of duplicate values. let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40
function sumOfDuplicates(arr) {
    const counts = {};
    let sum = 0;

    arr.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    for (const num in counts) {
        if (counts[num] > 1) {
            sum += parseInt(num, 10) * counts[num];
        }
    }

    return sum;
}
console.log(sumOfDuplicates([10, 20, 40, 10, 50, 30, 10, 60, 10])); // Output: 40

//3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
//a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
function rockPaperScissor(playerChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        return 'Win';
    } else {
        return 'Lose';
    }
}
console.log(rockPaperScissor('rock')); // Output: 'Win' or 'Lose' based on random choice