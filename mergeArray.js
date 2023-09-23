 // How to merge array in Js

//1. Loop approach

let arr1 = [1,2,3];
let arr2 = [3,4,5];

let finalArray = [];

for(let i =0; i<arr1.length; i++){
    finalArray.push(arr1[i]);
}

for( let i =0; i<arr2.length; i++){
    finalArray.push(arr2[i]);
}

console.log(finalArray); // result : [1,2,3,4,5]

//2.  merge() using

const merge = (a, b) =>{
    for(item of b){
        a.push(item);
    }
    return a;
}

let a = [10,20,30];
let b = [40,50,60];

let merged = merge(a,b)
console.log(merged);


// 3. spread operator - es6 version

let arr3 = [100,200,300];
let arr4 = [400,1000,3878];

let array = [...arr3, ...arr4];
console.log(array);

// 4. concat method

let array1 = [2,57,99,0];
let array2 = [34,56,89];

let result  = array1.concat(array2);
console.log(result);


// push - method

let c = [23,45,7];
let d = [4,8,9];
c.push(...d);
console.log(c);