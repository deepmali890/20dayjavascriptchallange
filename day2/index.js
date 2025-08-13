// // // // // // // // // // let arr = [5, 12, 8, 130, 44];

// // // // // // // // // // let first = -Infinity
// // // // // // // // // // let second = -Infinity

// // // // // // // // // // for(let num of arr){
// // // // // // // // // //     if(num > first){
// // // // // // // // // //         second = first
// // // // // // // // // //         first =num
// // // // // // // // // //     }
// // // // // // // // // //     else if (num > second && num < first){
// // // // // // // // // //         second = num
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // // // console.log(second)


// // // // // // // // // let arr = ["python", "javascript", "java", "c++", "c", "javascript", "javascript"]
// // // // // // // // // let count = 0;

// // // // // // // // // for(let word of arr){
// // // // // // // // //     if( word === "javascript"){
// // // // // // // // //         count ++;
// // // // // // // // //     }

// // // // // // // // // }

// // // // // // // // // console.log("javascript",count)











// // // // // // // // let str =  "javascript is best"
// // // // // // // // const upar = str.split(" ")

// // // // // // // // let result = upar.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

// // // // // // // // console.log(result)



// // // // // // // let arr1= [1, 3, 5, 7]
// // // // // // // let arr2= [3, 7, 9, 11]


// // // // // // // const intersection = arr1.filter(num => arr2.includes(num))

// // // // // // // console.log(intersection)

// // // // // // let falseVaule = [false, "hello", 0, 42, "", NaN, "world", undefined]

// // // // // // let result = falseVaule.filter(Boolean)

// // // // // // console.log(result)


// // // // // let a = 5;
// // // // // let b = 10;


// // // // // a = a + b // 15
// // // // // b = a - b // 5
// // // // // a = a - b //10

// // // // // console.log("a =" , a)
// // // // // console.log("b =", b)    



// // // // let arr = [1, 2, 3, 5]
// // // // let n = 5
// // // // let missingNum;

// // // // for (let i = 1; i <= n; i++) {
// // // //     if(!arr.includes(i)){
// // // //         missingNum = i
// // // //     }
// // // // }

// // // // console.log(missingNum)

// // // let arr = [1, [2, [3, [4]]]];
// // // let result = arr.flat(Infinity)

// // // console.log(result)





// // let  str1 = "listfb";
// // let  str2 = "silent";

// // function isAnagram(a,b){
// //     if(a.length !== b.length) return console.log("is not anagram");

// //     let sort1 = a.split("").sort().join("")
// //     let sort2 = b.split("").sort().join("")
// //     return sort1 === sort2


// // }

// // console.log(isAnagram(str1,str2))

// // isAnagram(str1,str2)



// let str = "swiss";
// let freq = {}  //{ s: 3, w: 1, i: 1 }

// for (let ch of str) {
//     freq[ch] = (freq[ch] || 0) + 1
// }

// let findFirstElement = null;

// for (let ch of str) {
//     if (freq[ch] === 1){
//         findFirstElement = ch;
//         break
//     }
// }

// console.log(findFirstElement)




