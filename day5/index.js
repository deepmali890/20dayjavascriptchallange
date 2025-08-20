
// // Q.1 Write a JavaScript program to find the largest element in a nested array.

// let array = [[1, 2, 3], [4, 5, 6,], [7, 8, 9]]; // [1, 2, 3], [4, 5, 6,], [7, 8, 9]

// function largestNum(arr) {
//     if (arr.length === 0) return false

//     let largest = -Infinity

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] > largest){
//                 largest = arr[i][j]
//             }
//         }
//     }
//     return largest

// }

// console.log(largestNum(array))  //[1,2,3,4,5,6,7,8,9]




// Q.2  Write a function that takes an array of objects and a key, and returns a new array sorted
// based on the values of that key in ascending order.

// let student = [
//     { name: "Dilip", age: 21 },
//     { name: "bharat", age: 15 },
//     { name: "sumit", age: 20 },
//     { name: "pankaj", age: 17 },
// ]

// function sortedArray(arr, key) {
//     return [...arr].sort((a, b) => {
//         if (a[key] < b[key]) return -1 // false
//         if (a[key] > b[key]) return 1 //  true
//         return 0

//     })
// }

// console.log(sortedArray(student, "age"))
//   [
//   { name: 'bharat', age: 15 },
//   { name: 'pankaj', age: 17 },
//   { name: 'sumit', age: 20 },
//   { name: 'Dilip', age: 21 }
// ]





// Q.3 Implement a function that merges two arrays into a single array, alternating elements
// from each array.

// let arr1 = [1, 3, 5, 7, 9] // [1,2,3,4,5,6,7,8,9]
// let arr2 = [2, 4, 6, 8]


// function mergeArray(a, b) {
//     let result = [];

//     let i = 0;

//     let maxLength = Math.max(a.length, b.length);

//     while (i < maxLength) {
//         if (i < a.length) {
//             result.push(a[i])
//         }
//         if (i < b.length) {
//             result.push(b[i])
//         }
//         i++;
//     }

//     return result

// }

// // console.log(mergeArray(arr1, arr2))    //[1,2,3,4,5,6,7,8,9]




// Q.5 Implement a function that finds the index of a specific element in an array. If the
// element is not found, the function should return -1

// let arr = [10, 20, 30, 40, 50];

// function findIndex(num, target) {
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] === target) {
//             return i
//         }
//     }
//     return -1
// }



// console.log(findIndex(arr, 60))  // -1



// Q.6 Implement a function that finds the maximum number in an array


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function maxNum(arr) {
//     if (arr.length === 0) return false

//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }

//     }
//     return max

// }

// console.log(maxNum(array))  // 9





// Q.7 Implement a function that converts a number to its Roman numeral representation.


// function romanNumeral(num) {

//     const romanMap = [
//         { value: 1000, symbol: "M" },
//         { value: 900, symbol: "CM" },
//         { value: 500, symbol: "D" },
//         { value: 400, symbol: "CD" },
//         { value: 100, symbol: "C" },
//         { value: 90, symbol: "XC" },
//         { value: 50, symbol: "L" },
//         { value: 40, symbol: "XL" },
//         { value: 10, symbol: "X" },
//         { value: 9, symbol: "IX" },
//         { value: 5, symbol: "V" },
//         { value: 4, symbol: "IV" },
//         { value: 1, symbol: "I" }
//     ];

//     let result = "";

//     for (let i = 0; i < romanMap.length; i++) {
//         if (num >= romanMap[i].value) {
//             result += romanMap[i].symbol;
//             num -= romanMap[i].value
//         }
//     }

//     return result

// }

// console.log(romanNumeral(1040))  // MXL




// Q.8 Write a function that generates a random alphanumeric string of a given length

// function alphanumeric(length) {
//     let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//     let result = ""
//     for (let i = 0; i < length; i++) {
//         let randomChar = Math.floor(Math.random() * chars.length)
//         result += chars[randomChar]

//     }
//     return result
// }

// console.log(alphanumeric(5)) // devew



//Q.9 Write a function that reverses the order of words in a sentence without using the built-in
// reverse() method.

// let sentence = "i love javascript"

// let word = sentence.split(" ")

// function rev(arr) {
//     let result = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i])
//     }

//     return result.join(" ")
// }


// console.log(rev(word)) // javascript love i



// Q.10 Implement a debounce function in JavaScript that limits the frequency of a function’s
// execution when it’s called repeatedly within a specified time frame

// function debounce(fn, delay) {
//     let timer;

//     return function(...args){
//         clearTimeout()


//         timer = setTimeout(() => {
//             fn.apply(this, args)
//         }, delay);
//     }
// }



// function logMessage(msg) {
//     console.log("user type", msg)

// }


// let debounceLog = debounce(logMessage, 5000)

// debounceLog("he")
// debounceLog("he")
// debounceLog("hello")