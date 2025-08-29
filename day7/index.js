// Q.1 Check if a number is an integer without using Number.isInteger().

// function checkInt(num) {
//     if (num % 1 === 0) {
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(checkInt(10.12)) // false



// Q.2 Flatten a deeply nested object into a single-level object.
// let user = {
//     name: "Dilip",
//     address: {
//         city: "Pali",
//         details: {
//             pincode: 306401,
//             landmark: "Bus Stand"
//         }
//     }
// };


// function flattenObj(obj, parentKey = "", result = {}) {
//     for (let key in obj) {
//         const newKey = parentKey ? parentKey + "." + key : key

//         if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
//             flattenObj(obj[key], newKey, result)
//         } else {
//             result[newKey] = obj[key]

//         }

//     }
//     return result


// }
// console.log(flattenObj(user))



// Q.4 Check if two objects are deeply equal.

// let obj1 = { a: 1, b: { c: 2 } };
// let obj2 = { a: 1, b: { c: 2 } };



// function deepEqual(obj1, obj2) {
//     if (obj1 === obj2) return true


//     if (typeof obj1 !== "object" || obj1 === null ||
//         typeof obj2 !== "object" || obj2 === null
//     ) {
//         return false
//     }

//     let key1 = Object.keys(obj1)
//     let key2 = Object.keys(obj2)

//     if (key1.length !== key2.length) return false

//     for (let key of key1){
//         if(!key2.includes(key)){
//             return false
//         }
//     }

//     return true

// }
// console.log(deepEqual(obj1, obj2)) // true


// Q.5 Find all subsets of a given array

// let arr = [1, 2, 3] 


// function subSets(nums) {
//     let result = []; // [[]]

//     function breacktes(start, current) {
//         result.push([...current])

//         for (let i = start; i < nums.length; i++) {
//             current.push(nums[i]);
//             breacktes(i + 1, current)
//             current.pop()
//         }

//     }

//     breacktes(0, [])

//     return result
// }

// console.log(subSets([1, 2, 3]));



// Q.7 Check if a string has balanced parentheses {}, [], ()

// function isBalanced(s) {
//     const map = { ')': '(', '}': '{', ']': '[' };
//     const stack = [];

//     for (let ch of s) {
//         if (ch === "(" || ch === "{" || ch === "[") {
//             stack.push(ch);
//         } else if (ch === ")" || ch === "}" || ch === "]") {
//             if (stack.length === 0) return false
//             let top = stack.pop()
//             if (top !== map[ch]) return false
//         } else {
//             continue;
//         }
//     }

//     return stack.length === 0

// }


// console.log(isBalanced("({[]})")); // true
// console.log(isBalanced("({[})")); // false
// console.log(isBalanced("({[]})")); // true
// console.log(isBalanced("({[})")); // false



// Q.8 Find the first duplicate element in an array.
// function firstDuplicate(nums) {
//     let seen = new Set()

//     for(let num of nums){
//         if(seen.has(num)){
//             return num
//         }
//         seen.add(num)
//     }

//     return -1


// }

// console.log(firstDuplicate([2, 5, 3, 4, 5, 2])); // 5


// Q.9 Find the intersection of two objects (common keys with same values).
// let obj1 = {
//     name: "Dilip",
//     age: 23,
//     city: "Pali"
// };

// let obj2 = {
//     name: "Dilip",
//     age: 24,
//     city: "Pali",
//     country: "India"
// };


// let common = {};

// for (let key in obj1) {
//     if (obj2[key] !== undefined && obj1[key] === obj2[key]) {
//         common[key] = obj1[key]
//     }
// }

// console.log(common) // { name: 'Dilip', city: 'Pali' }


// Q.10 Find the longest palindromic substring in a string.
// function longestPalindromeBrute(str) {
//     let longest = "";

//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let sub = str.substring(i, j + 1)
//             if (isPalindrome(sub) && sub.length > longest.length) {
//                 longest = sub
//             }

//         }

//     }

//     return longest

// }


// function isPalindrome(s) {
//     return s === s.split("").reverse().join("")
// }


// console.log(longestPalindromeBrute("babad"));  // "bab" ya "aba"















