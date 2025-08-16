// // // // // // // // // // let arr = [1, 2, 3, 4, 5, 6];

// // // // // // // // // // function chunArray(array, size) {
// // // // // // // // // //     let result = [];
// // // // // // // // // //     for (let i = 0; i<array.length; i+=size){
// // // // // // // // // //         let chunk = array.slice(i, i+size)
// // // // // // // // // //         result.push(chunk)
// // // // // // // // // //     }

// // // // // // // // // //     console.log(result)

// // // // // // // // // // }

// // // // // // // // // // chunArray(arr, 2)




// // // // // // // // // let arr1 = [1, 3, 2, 4, 5, 2];
// // // // // // // // // let arr2 = [1, 3, 2, 4, 5];

// // // // // // // // // function isEqul(a, b) {
// // // // // // // // //     if (a.length !== b.length) return console.log("is not Equl beacuse length is not same ")

// // // // // // // // //     for (let i = 0; i<arr1.length; i++){
// // // // // // // // //         if(arr1[i] !== arr2[i]){
// // // // // // // // //             return console.log(false)
// // // // // // // // //         }
// // // // // // // // //     }

// // // // // // // // //     return true

// // // // // // // // // }

// // // // // // // // // console.log(isEqul(arr1, arr2))





// // // // // // // // let arr = [0, 1, 0, 3, 12];

// // // // // // // // let nonZeroIndex = 0;

// // // // // // // // for (let i = 0; i < arr.length; i++) {
// // // // // // // //     if (arr[i] !== 0) {
// // // // // // // //         arr[nonZeroIndex] = arr[i];
// // // // // // // //         nonZeroIndex++;
// // // // // // // //     }
// // // // // // // // }


// // // // // // // // for (let j = nonZeroIndex; j < arr.length; j++) {
// // // // // // // //     arr[j] = 0;
// // // // // // // // // 

// // // // // // // // console.log(arr)



// // // // // // // let arr = [0, 0, 1, 3, 12];

// // // // // // // function isSorted(array) {
// // // // // // //     for (let i = 0; i < array.length; i++) {
// // // // // // //         if (array[i] > array[i + 1]) {
// // // // // // //             return false
// // // // // // //         }
// // // // // // //     }

// // // // // // //     return true
// // // // // // // }


// // // // // // // console.log(isSorted(arr))





// // // // // // let strs = "Dilip mali";  // dilipMali

// // // // // // function toLowerCaseString(str) {
// // // // // //     let words = str.split(/[\s-_]+/);


// // // // // //     let camelCaseStr = words[0].toLowerCase();

// // // // // //     for (let i = 1; i < words.length; i++) {
// // // // // //         camelCaseStr += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
// // // // // //     }

// // // // // //     return camelCaseStr
// // // // // // }



// // // // // // console.log(toLowerCaseString(strs))


// // // // // let fun1 = () => console.log("first 1 function run hua", new Date().toLocaleTimeString())
// // // // // let fun2 = () => console.log("first 2 function run hua", new Date().toLocaleTimeString())
// // // // // let fun3 = () => console.log("first 3 function run hua", new Date().toLocaleTimeString())
// // // // // let fun4 = () => console.log("first 4 function run hua", new Date().toLocaleTimeString())
// // // // // let fun5 = () => console.log("first 5 function run hua", new Date().toLocaleTimeString())


// // // // // function scheduler(functions, interval) {

// // // // //     let index = 0;

// // // // //     function runNext() {
// // // // //         if (index < functions.length) {
// // // // //             functions[index]()
// // // // //             index++;
// // // // //             setTimeout(runNext, interval)
// // // // //         }else{
// // // // //             console.log("Time complate")
// // // // //         }
// // // // //     }
// // // // //     runNext()

// // // // // }

// // // // // console.log(scheduler([fun1, fun2, fun3, fun4, fun5], 2000))



// // // // let arr = [0,0,0,0,0,0,0];

// // // // function peakNumber(nums) {
// // // //     for (let i = 0; i < nums.length; i++) {
// // // //         let left = i === 0 ? -Infinity : nums[i - 1];
// // // //         let right = i === nums.length - 1 ? -Infinity : nums[i + 1]


// // // //         if (nums[i] > left && nums[i] > right) {
// // // //             return nums[i]
// // // //         }
// // // //     }

// // // //     return console.log("not peak number")

// // // // }


// // // // console.log(peakNumber(arr)
// // // // )





// // // let arr = [1, 2, 3, 4, 45, 43, 2, , 3, 4, 533, 8]

// // // let Ascending = arr.sort((a, b) => a - b);
// // // console.log(Ascending)

// // // let Descending = arr.sort((a, b) => b - a)
// // // console.log(Descending)


// // let arr = [5, 4, 57, 8, 8, 3];

// // function AverageNumber(array) {
// //     if (array === 0) return console.log("please add numbers")

// //     let sum = array.reduce((a, n) => a + n);
// //     // console.log(sum)
// //     let avarage = sum / array.length;
// //     console.log(avarage)

// // }


// // AverageNumber(arr)

// // 
// // let str = "Frontend Developer"
// // 
// // let reverse = str.split(" ").reverse().join(" ")
// // 
// // console.log(reverse)



// let sentence = "dog runs faster than another dog";

// let replace = sentence.replace("", "")