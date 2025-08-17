// // // // // // // // // // function isPrime(num) {
// // // // // // // // // //     if (num <= 1) {
// // // // // // // // // //         return false;
// // // // // // // // // //     }

// // // // // // // // // //     for (let i = 2; i < num; i++) {
// // // // // // // // // //         if (num % i === 0){
// // // // // // // // // //             return false
// // // // // // // // // //         }
// // // // // // // // // //     }
// // // // // // // // // //     return true

// // // // // // // // // // }

// // // // // // // // // // console.log(isPrime(11))



// // // // // // // // // // let arr = [2, 3, 4, 5, 6, 7, 8, 9];


// // // // // // // // // // function isPrime(array) {

// // // // // // // // // //     let prime = [];

// // // // // // // // // //     for (let num of array) {
// // // // // // // // // //         if (num <= 1) continue;
// // // // // // // // // //         let isPrime = true;

// // // // // // // // // //         for (let i = 2; i <= Math.sqrt(num); i++) {
// // // // // // // // // //             if (num % i === 0) {
// // // // // // // // // //                 isPrime = false
// // // // // // // // // //                 break
// // // // // // // // // //             }
// // // // // // // // // //         }

// // // // // // // // // //         if (isPrime) {
// // // // // // // // // //             prime.push(num)
// // // // // // // // // //         }
// // // // // // // // // //     }

// // // // // // // // // //     return prime

// // // // // // // // // // }

// // // // // // // // // // console.log(isPrime(arr))

// // // // // // // // // function fibonacci(n) {
// // // // // // // // //     let num1 = 0, num2 = 1, next;

// // // // // // // // //     for (let i = 1; i <= n; i++) {
// // // // // // // // //         console.log(num1)
// // // // // // // // //         next = num1 + num2 
// // // // // // // // //         num1 = num2
// // // // // // // // //         num2 = next
// // // // // // // // //     }

// // // // // // // // // }



// // // // // // // // // fibonacci(7)



// // // // // // // // let arr = ["dilip", "mali"];

// // // // // // // // let result = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())

// // // // // // // // console.log(result)


// // // // // // // let str = "programming";

// // // // // // // let result = [...new Set(str)]

// // // // // // // console.log(result)

// // // // // // // let result2 = str.split("").filter((char, index, arr) => arr.indexOf(char) === index);
// // // // // // // console.log(result)



// // // // // // let arr = [1, 1, 2, 3, 2, 3, 4, 4, 5, 5];

// // // // // // function removeDup(array) {
// // // // // //     let uniqueNum = [];

// // // // // //     for (let i = 0; i < array.length; i++) {
// // // // // //         if (uniqueNum.indexOf(array[i]) === -1){
// // // // // //             uniqueNum.push(array[i])
// // // // // //         }
// // // // // //     }

// // // // // //     return uniqueNum;
// // // // // // }

// // // // // // console.log(removeDup(arr))


// // // // // let data = {name:"Dilip", age:21, isPass:true};

// // // // // let str = JSON.stringify(data)
// // // // // console.log(typeof str, str)

// // // // // let obj = JSON.parse(str);

// // // // // console.log(typeof obj, obj)


// // // // class person {
// // // //     constructor(name, age) {
// // // //         this.name = name,
// // // //             this.age = age
// // // //     }

// // // //     greet(){
// // // //         console.log(`my name is ${this.name} and i am ${this.age} years old`)
// // // //     }
// // // // }

// // // // let person1 = new person("Dilip", 21);

// // // // person1.greet()


// // // function factorial(n) {
// // //     let answer = 1;

// // //     for (let i = 2; i <= n; i++) {
// // //         answer *= i
// // //     }
// // //     return answer

// // // }

// // // console.log(factorial(7))



// // let sentence = "Dilip Mali Is Developer";
// // let word = "Sumit";

// // if(sentence.includes(word)){
// //     console.log("this word are includes", true)
// // }else{
// //     console.log("no this word are not includes", false)
// // }


// let arr = [2, 7,  4];

// function maxDiffernce(num) {
//     if (num.length < 2) return 0;

//     minVal = Math.min(...num);
//     maxVal = Math.max(...num)

//     return maxVal - minVal ;

// }


// console.log(maxDiffernce(arr))