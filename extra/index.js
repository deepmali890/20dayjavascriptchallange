// var abc = 25;

// if (function f() { }) {
//     abc = abc + typeof f
// }

// console.log(abc)

// let str = "Dilip mali";
// let words = "dsjw";

// if (str.includes(words)) {
//     console.log("this word are includes")
// } else {
//     console.log("no this word are not includes")
// }


// let str = "my name is dilip";


// function isPersent(char,sub) {
//     if(char.indexOf(sub) !== -1){
//         console.log("is persent")
//     }else{
//         console.log("not persent")
//     }

// }

// isPersent(str, "hello")



// let str = "Dilip mali is Great Great Person";

// function countChar(char, subChar) {
//     let count = 0;

//     let words = char.split(" ")

//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === subChar) {
//             count++;
//         }
//     }

//     return count

// }

// console.log(countChar(str, "Great"))



// let str1 = "Dilip";
// let str2 = "Mali";

// let str3 = str1 && str2;

// console.log(str3)

// [a] = [100, 200, 300, 400]

// console.log(a)


// let a = 100;
// const b = a++ + ++a

// console.log(b)

// if ([] == true) {
//     console.log("Dilip is absent")
// } else {
//     console.log("Dilip is persent")
// }

// console.log([0].toString())



// let obj = {
//     a:{
//         b:undefined
//     }
// }

// console.log(obj.a?.b?.c?.d?? "Dilip")



// let users = [
//   {
//     id: 1,
//     name: "Dilip",
//     address: {
//       city: "Pali",
//       pincode: 306103
//     }
//   },
//   {
//     id: 2,
//     name: "Nikita",
//     // address missing
//   },
//   {
//     id: 3,
//     name: "Sumit",
//     address: {
//       city: undefined,
//       pincode: null
//     }
//   }
// ];


// (
//     users.map((item)=>{
//         console.log(
//             item.address?.city ?? "city not availabel",
//             item.address?.pincode ?? "pincode not availabel",
//             item.name
//         )

//     })
// )





// function add1(a) {
//     return function add2(b) {
//         if (b === undefined) {
//             return add1(a)
//         } else {
//             return add1(a + b)
//         }
//     }
// }



// let array = [1, 2, 3, 2, 4, 5, 1, 6, 3, 3];



// function dupEle(arr) {
//     let duplicates = [];
//     let seen = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (seen.includes(arr[i]) && !duplicates.includes(arr[i])) {
//             duplicates.push(arr[i])
//         } else {
//             seen.push(arr[i])
//         }

//     }

//     return duplicates
// }

// console.log(dupEle(array))


// let array = [1, "hello", true, 3.14, {}, [], null, undefined, () => { }]


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

//     return count

// }



// console.log(countDataTypes(array))




// function filterByComparator(arr, comparator) {

//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!comparator(arr[i])) {
//             result.push(arr[i])
//         }
//     }

//     return result;

// }


// console.log(filterByComparator([10, 15, 20, 25], (n) => n > 18))


// function customFilter(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// // Example usage:
// let numbers = [1, 2, 3, 4, 5, 6];

// let evenNumbers = customFilter(numbers, function(num) {
//     return num % 2 === 0;
// });

// console.log(evenNumbers); // [2, 4, 6]





// day 7

// Q.1 Check if a number is an integer without using Number.isInteger().

// function checkInt(num) {
//     if (num % 1 === 0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(checkInt(32.22))






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

// function flattenObject(obj, parentKey = "", result = {}) {
//     for (let key in obj) {
//         const newKey = parentKey ? parentKey + "." + key : key

//         if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
//             flattenObject(obj[key], newKey, result)
//         } else {
//             result[newKey] = obj[key]
//         }

//     }

//     return result

// }

// console.log(flattenObject(user));



// Q.3 Find the longest substring without repeating characters.

// let obj1 = { a: 1, b: { c: 2 } };
// let obj2 = { a: 1, b: { c: 2 } };


// function deepEqual(obj1, obj2) {
//     if (obj1 === obj2) return true;

//     if (typeof obj1 !== "object" || obj1 === null ||
//         typeof obj2 !== "object" || obj2 === null
//     ) {
//         return false
//     }

//     let key1 = Object.keys(obj1)
//     let key2 = Object.keys(obj2)

//     // console.log(key1)

//     if (key1.length !== key2.length) return false

//     for (let key of key1) {
//         if (!key2.includes(key) || !deepEqual(obj1[key], obj2[key])){
//             return false
//         }
//     }

//     return true

// }


// console.log(deepEqual(obj1, obj2));



// Q.5 Find all subsets of a given array.







// function subsets(nums) {
//     let result = [];

//     function backtrack(start, current) {
//         // Push current subset
//         result.push([...current]);

//         for (let i = start; i < nums.length; i++) {
//             current.push(nums[i]);      // include nums[i]
//             backtrack(i + 1, current);  // move forward
//             current.pop();              // backtrack
//         }
//     }

//     backtrack(0, []);
//     return result;
// }

// // Test
// console.log(subsets([1, 2, 3]));



function longestPalindromeBrute(str) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let sub = str.substring(i, j + 1);
      if (isPalindrome(sub) && sub.length > longest.length) {
        longest = sub;
      }
    }
  }

  return longest;
}

function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

console.log(longestPalindromeBrute("babad")); // "bab" ya "aba"
// console.log(longestPalindromeBrute("cbbd"));  // "bb"

















