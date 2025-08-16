// // // // function isPrime(num) {
// // // //     if (num <= 1) return false

// // // //     for (let i = 2; i < num; i++) { 
// // // //         if (num % i === 0){
// // // //             return false
// // // //         }
// // // //     }

// // // //     return true

// // // // }


// // // // console.log(isPrime(8))


// // // let arr = [2, 3, 4, 5, 6, 7];

// // // function isPrime(array) {
// // //     let prime = [];

// // //     for (let num of array) {
// // //         if (num <= 1) continue
// // //         let isPrime = true;


// // //         for (let i = 2; i <= Math.sqrt(num); i++) {
// // //             if (num % i === 0){
// // //                 isPrime = false
// // //                 break
// // //             }
// // //         }

// // //         if(isPrime){
// // //             prime.push(num)
// // //         }
// // //     }
// // //     return prime
// // // }


// // // console.log(isPrime(arr))




// // // function fibonacci(num) {
// // //     let num1 = 0
// // //     let num2 = 1
// // //     let nextNum;


// // //     console.log("fibonacci nums")

// // //     for (let i = 1; i <= num; i++) {
// // //         console.log(num1)
// // //         nextNum = num1 + num2;
// // //         num1 = num2;  
// // //         num2 = nextNum;
// // //     }
// // // }

// // // fibonacci(7)



// // // let arr = [ 'dilip', 'mali', 'deeprise'];

// // // let result = arr.map((word)=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())

// // // console.log(result)




// // // let str = "programming";

// // // let result = [...new Set(str)]
// // // console.log(result)

// // // let str = "programming";


// // // let unQuie = str.split("").filter((char, index, arr) => arr.indexOf(char) === index);

// // // console.log(unQuie)


// // // let arr = [1, 2, 2, 3, 4, 5, 6]



// // // function removeDup(array) {
// // //     let unQuieNums = [];

// // //     for (let i = 0; i < array.length; i++) {
// // //         if (unQuieNums.indexOf(array[i]) === -1) {
// // //             unQuieNums.push(array[i])
// // //         }
// // //     }
// // //     return unQuieNums;


// // // }

// // // console.log(removeDup(arr)
// // // )



// // // let sentence = { age: "Dilip", name: "Dilip" }

// // // let result = JSON.stringify(sentence)

// // // let obj = JSON.parse(result)

// // // console.log(obj)



// // class person {
// //     constructor(name, age) {
// //         this.name = name,
// //             this.age = age
// //     }

// //     greet() {
// //         console.log(`my name is ${this.name}, and i am ${  this.age} old`)
// //     }

// // }

// // let person1 = new person("Dilip", 21)

// // person1.greet();





// // function factorial(n) {

// //     let answer = 1;

// //     for (let i = 2; i <= n; i++) {
// //         answer *= i
// //     }
// //     return answer


// // }

// // console.log(factorial(7))


// let str = "Dilip Mali is a developer";
// let word = "sumit";

// if(str.includes(word)){
//     console.log("yes", true)
//     true
// }else{
//     console.log("no", false)
// }


