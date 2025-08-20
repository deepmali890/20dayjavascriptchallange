// // Q.1 Write a Program to check if a number is prime or not?

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0){
//             return false
//         }
//     }
//     return true

// }

// console.log(isPrime(11))  // true



// let arr = [2, 3, 4, 5, 6, 7, 8, 9];


// function isPrime(array) {

//     let prime = [];

//     for (let num of array) {
//         if (num <= 1) continue;
//         let isPrime = true;

//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 isPrime = false
//                 break
//             }
//         }

//         if (isPrime) {
//             prime.push(num)
//         }
//     }

//     return prime

// }

// console.log(isPrime(arr)) // [2,3,5,7]

// // Q.2 Write a Program to print Fibonacci sequence up to n terms?

// function fibonacci(n) {
//     let num1 = 0, num2 = 1, next;

//     for (let i = 1; i <= n; i++) {
//         console.log(num1)
//         next = num1 + num2
//         num1 = num2
//         num2 = next
//     }

// }



// fibonacci(7)


// // Q.3 Convert an Array of Strings to Uppercase in JavaScript?

// let arr = ["dilip", "mali"];

// let result = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())

// console.log(result) // ["Dilip", "Mali"]



// // Q.4 Get Unique Characters from a String in JavaScript?

// let str = "programming";

// let result = [...new Set(str)]

// console.log(result)

// let result2 = str.split("").filter((char, index, arr) => arr.indexOf(char) === index);
// console.log(result) 



// Q.5 Remove Duplicates from an Array in JavaScript without Set() method

// let arr = [1, 1, 2, 3, 2, 3, 4, 4, 5, 5];

// function removeDup(array) {
//     let uniqueNum = [];

//     for (let i = 0; i < array.length; i++) {
//         if (uniqueNum.indexOf(array[i]) === -1) {
//             uniqueNum.push(array[i])
//         }
//     }

//     return uniqueNum;
// }

// console.log(removeDup(arr))  //[1, 2, 3, 4, 5]


// // Q.7 Use JSON to parse and stringify data in JavaScript?

// let data = {name:"Dilip", age:21, isPass:true};

// let str = JSON.stringify(data)
// console.log(typeof str, str)

// let obj = JSON.parse(str);

// console.log(typeof obj, obj) 



// Q.8 Write a Program to create a simple class in JavaScript?

// class person {
//     constructor(name, age) {
//         this.name = name,
//             this.age = age
//     }

//     greet(){
//         console.log(`my name is ${this.name} and i am ${this.age} years old`)
//     }
// }

// let person1 = new person("Dilip", 21);

// person1.greet()



// Q.9 Write a Program to find factorial of a number?


// function factorial(n) {
//     let answer = 1;

//     for (let i = 2; i <= n; i++) {
//         answer *= i
//     }
//     return answer

// }

// console.log(factorial(7)) // 5040



// Q.10 Check if a String Contains Another String in JavaScript?

// let sentence = "Dilip Mali Is Developer";
// let word = "Sumit";

// if(sentence.includes(word)){
//     console.log("this word are includes", true)
// }else{
//     console.log("no this word are not includes", false)
// }



// // Q.6 Find the maximum difference between two numbers in an array in JavaScript?

// let arr = [2, 7,  4];

// function maxDiffernce(num) {
//     if (num.length < 2) return 0;

//     minVal = Math.min(...num);
//     maxVal = Math.max(...num)

//     return maxVal - minVal ;

// }


// console.log(maxDiffernce(arr)) // 5