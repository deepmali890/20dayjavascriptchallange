

// //  ## Q.1 Find the second largest number in [5, 12, 8, 130, 44]

// let arr = [5, 12, 8, 130, 44];
// let first = -Infinity
// let second = -Infinity

// for (let num of arr) {
//     if (num > first) {
//         second = first
//         first = num
//     }
//     else if (num > second && num < first) {
//         second = num
//     }
// }
// console.log(second) // 44















// ## Q.2 Count how many times "JavaScript" appears in Array
// 
//  let arr = ["python", "javascript", "java", "c++", "c", "javascript", "javascript"]
//  let count = 0;
// 
//  for(let word of arr){
//  if( word === "javascript"){
//  count ++;
//  }
// 
//  }
// 
//  console.log("javascript",count) // javascript 3










//  ## Q.3 Convert the first letter of every word in to uppercase
// 
//  let str =  "javascript is best"
//  const upar = str.split(" ")
// 
//  let result = upar.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// 
//  console.log(result) // Javascript Is Best


// ## Q.4 Find the intersection of [1, 3, 5, 7] and [3, 7, 9, 11]
// 
//  let arr1= [1, 3, 5, 7]
//  let arr2= [3, 7, 9, 11]
// 
// 
//  const intersection = arr1.filter(num => arr2.includes(num))
// 
//  console.log(intersection) // [3, 7]

//  Q.5 Remove falsy values from [false, "hello", 0, 42, "", NaN, "world", undefined]
// 
//  let falseVaule = [false, "hello", 0, 42, "", NaN, "world", undefined]
// 
//  let result = falseVaule.filter(Boolean)
// 
//  console.log(result) // ["hello", 42, "world"]


// ## Q.6 Swap two variables without using a third variable (a = 5, b = 10)
// 
//  let a = 5;
//  let b = 10;
// 
// 
//  a = a + b // 15
//  b = a - b // 5
//  a = a - b //10
// 
//  console.log("a =" , a) // 15
//  console.log("b =", b) // 5


// ## Q.7 Find the missing number from [1, 2, 3, 5]

//  let arr = [1, 2, 3, 5]
//  let n = 5
//  let missingNum;
// 
//  for (let i = 1; i <= n; i++) {
//  if(!arr.includes(i)){
//  missingNum = i
//  }
//  }
// 
//  console.log(missingNum) // 4


// ## Q.8 Flatten this array [1, [2, [3, [4]]]] into [1, 2, 3, 4]

//  let arr = [1, [2, [3, [4]]]];
//  let result = arr.flat(Infinity)

//  console.log(result) // [1, 2, 3, 4]




// ## Q.9 Check if two strings "listen" and "silent" are anagrams

//  let  str1 = "listen";
//  let  str2 = "silent";
// 
//  function isAnagram(a,b){
//  if(a.length !== b.length) return console.log("is not anagram");
// 
//  let sort1 = a.split("").sort().join("")
//  let sort2 = b.split("").sort().join("")
//  return sort1 === sort2
// 
// 
//  }
// 
//  console.log(isAnagram(str1,str2))
// 
//  isAnagram(str1,str2)  // true


// ## Q.9 Find the first non-repeating character in "swiss"

// let str = "swiss";
// let freq = {}  //{ s: 3, w: 1, i: 1 }
// 
// for (let ch of str) {
// freq[ch] = (freq[ch] || 0) + 1
// }
// 
// let findFirstElement = null;
// 
// for (let ch of str) {
// if (freq[ch] === 1){
// findFirstElement = ch;
// break
// }
// }
// 
// console.log(findFirstElement) // w


function scheduler(func, interval) {
    // setInterval ka use karke function ko repeat karte hain
    setInterval(func, interval);
}

// Example function jo hum bar-bar chalana chahte hain
function sayHello() {
    console.log("Hello Dilip! Time:", new Date().toLocaleTimeString());
}

// Scheduler ko call karo - har 2 second me sayHello chalega
// scheduler(sayHello, 2000);


const funcs = [];
for (let i = 1; i <= 10; i++) {
    funcs.push(() => console.log(`Function ${i} run hua`, new Date().toLocaleTimeString()));

}

function schedular(functions, interval) {
    let index = 0;

    function runNext() {
        if (index < functions.length) {
            functions[index]();
            index++;
            setTimeout(runNext, interval)
        } else {
            console.log("🎯  Time complete!");
        }
    }
    runNext()

    

}
schedular(funcs, 1000)


