
// // ## reverse string


// let str  = "Dilip";

//  let rev = str.split("").reverse().join("")
//  console.log(rev) 


//  let str2 = "Dilip Mali";
//  let reverse = ""

//  for(let i = str 2.length-1; i>=0; i--){
//      reverse += str2[i]
//  }
//  console.log(reverse)




















// // ## Count the vowels in a string

// let str = "hello World"
// let count = 0;
// let vowels = "aeiou"

// for (let char of str) {
//     if (vowels.includes(char)) {
//         count++;
//     }}

//     console.log(count) //3





// // Reverse only the words, not the entire sentence

//  let str = "Dilip Mali"; 
//  let words = str.split(" ");

//  for(let i = 0; i<words.length; i++){
//       words[i] = words[i].split("").reverse().join("")
//     }

//     console.log(words.join(" ")) // piliD ilaM






















// //  ## Find the largest word in a sentence

//     let str = "javascript is best"; // javascript 
//     let words = str.split(" ");
//     let longest = "";

//     for( let word of words){
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }
//     console.log(longest) // javascript









// // Count the frequency of each character in a string.


//     let str = "Dilip";
//     let freq = {};

//     for(let ch of str){
//         freq[ch] = (freq[ch] || 0) +1;
//     }

//     console.log(freq) // { D: 1, i: 2, l: 1, p: 1 }

















// Check if a string is a palindrome / Find all palindrome words in a sentence

// let str = "level";
// 
// function isPalindrome(a) {
    // return a === a.split("").reverse().join("")
// }
// 
// console.log(isPalindrome(str)) // true
// 
// 
// 
// let str2 = "level is best level";
// let words = str2.split(" ");
// let palindrome = [];
// 
// for (let word of words) {
    // if (word === word.split("").reverse().join("")) {
        // palindrome.push(word)
    // };
// }
// console.log(palindrome) // [ 'level', 'level' ]








// Reverse an array without using the reverse() method
// 
// 
//  let arr = [1, 2, 3, 4, 5];
//  let rev = [];
// 
//  for (let i = arr.length - 1; i >= 0; i--){
    //  rev.push(arr[i])
//  }
//  console.log(rev)`` // [ 5, 4, 3, 2, 1 ]













// 
// Merge two arrays without duplicates
// 
// 
//  let arr1 = [1, 2, 3]
//  let arr2 = [2, 3, 4]
// 
//  const merge = [...new Set([...arr1, ...arr2])]
//  console.log(merge)
// 










// 
// Sum of Only Even Numbers
// 
// let arr = [2, 3, 4, 5, 6]
// let sum = 0;
// for (let n of arr) {
    // if (n % 2 === 0){
        // sum+=n
    // }
// }
// console.log(sum) // 12











// Find common elements between two arrays 

let arr1 = [1, 2, 3, 4]
let arr2 = [2, 3, 4, 5]
// 
const common = arr1.filter(num => arr2.includes(num))
// 
console.log(common) // [ 2, 3, 4 ]




