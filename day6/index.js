
// // Q.1 Write a JavaScript function to find all duplicate elements in an array

// let array = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 4, 3];

// function getDup(arr) {
//     let dup = [];
//     let seen = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (seen.includes(arr[i]) && !dup.includes(arr[i])) {
//             dup.push(arr[i])
//         } else {
//             seen.push(arr[i])
//         }
//     }
//     return dup
// }

// console.log(getDup(array)) // 



// Q.2 How to count number of data types in an array in JavaScript ?

// let array = [1, "hello", true, 3.14, {}, [], null, undefined, () => { }];

// function countDataTypes(arr) {
//     let count = {};

//     for (let i = 0; i < arr.length; i++) {
//         let type = typeof arr[i]

//         if (count[type]) {
//             count[type]++;
//         } else {
//             count[type] = 1
//         }
//     }

//     return count;
// }

// console.log(countDataTypes(array))


// Q.3 How to filter values from an array for which the comparator function does not return
// true in JavaScript ?

// let array = [10, 15, 20, 25];



// function findByComparator(arr, comparator) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!comparator(arr[i])) {
//             result.push(arr[i])
//         }
//     }

//     return result
// }

// console.log(findByComparator(array, (n) => n > 18))  // FALSE, FALSE,  TRUE, TRUE



// Q.4 How to remove specific elements from the left of a given array of elements using
// JavaScript ?

// let array = [1, 2, 3, 4, 5];

// function removeLeftEle(arr, n) {
//     return arr.slice(n)
// }

// console.log(removeLeftEle(array, 2))

// let array2 = [1, 2, 3, 4, 5, 6];

// function removeLeftEle(arr, n) {
//     let result = [];

//     for (let i = n; i < arr.length; i++) {
//         result.push(arr[i])

//     }
//     return result
// }

// console.log(removeLeftEle(array2, 2))



// Q.5 JavaScript - Convert Two-Dimensional Array Into an Object

// let arr = [["name", "Dilip"], ["age", 24], ["city", "Pali"]]; //{name:"Dilip",age:24,city:"pali"}


// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//     const [key, value] = arr[i];
//     obj[key] = value
// }

// console.log(obj)



// Q.6 Create an Object From Two Arrays


// const keys = ["name", "age", "city"];
// const values = ["Dilip", 25, "Pali"];

// const obj = {}

// for (let i = 0; i < keys.length; i++) {
//     obj[keys[i]] = values[i]
// }

// console.log(obj)



// Q.7 How to remove duplicate objects from an array based on a specific key in JavaScript?

// const arr = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Rahul" },
//     { id: 1, name: "Amit" }, // Duplicate (id = 1)
//     { id: 3, name: "Sita" }
// ];

// const unique = arr.filter(
//     (obj, index, self) => index === self.findIndex((o) => o.id === obj.id)
// )


// console.log(unique)


// Q.8 How to implement a custom filter() function in JavaScript without using
// Array.prototype.filter?

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function customFilter(arr, callBack) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (callBack(arr[i])) {
//             result.push(arr[i])
//         }

//     }

//     return result
// }

// let evenNumbers = customFilter(array, function (num) {
//     return num % 2 === 0
// })


// console.log(evenNumbers)




// Q.9 How to shuffle an array randomly in JavaScript?

// let array = [1, 2, 3, 4, 5, 6];

// function shuffleArray(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         let randomIndex = Math.floor(Math.random() * (i + 1));

//         [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
//     }

//     return arr

// }

// console.log(shuffleArray(array))



// Q.10 How to check if an object is empty in JavaScript

// let obj = {};

// let isEmpty = true;

// for (let key in obj){
//     isEmpty = false
//     break
// }

// console.log(isEmpty ? "obj is empty": "obj are not empty")






