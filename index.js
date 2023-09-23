// Array - Decalaration

 // let arr = new Array('banana','apple','orange'); 

let person = {
    name: 'nahid',
    age: 25,
};

let arr = ['Banana','orange','Cherry','Malta',person];
// console.log(arr.length);

// Arrays - Add and Remove Element

// Add to End of the Array
arr.push('Mango');

// Remove From end of the Array
arr.pop();
arr.pop();


// Add to the Top of the Array
arr.unshift('kola');

// Remove From Top of the Arry

arr.shift();

// Looping an Array

for( let i=0; i<arr.length; i++){
    // console.log(arr[i]);
}

let i =0;

while(i<arr.length){
    // console.log(arr[i]);
    i++;
}

// Inbuilt Loop Methods

const numbers = [1,2,3,4,5];

// map - arrray every element return kore
numbers.map((item, index, array)=>{
  return item+5;
 
})

// filter - one value/item return kore
 numbers.filter((item, index, array)=>{
    return item >3;
   
  })
 

// reduce - is to return the sum of all the elements in an array


const sum = numbers.reduce((prev, item)=>{
    return prev +item;
   
  },2)
// console.log(sum); 

// Sum - using row code in js

let arrayList = [3,5,6,7];

let total =0;
for(let i =0; i<arrayList.length; i++){
   
  total += arrayList[i];
    
}
// console.log(total); 


// Some - in javaScript

 numbers.some((item,index,array) =>{
    return item > 3;
})

// every in javaScript - return true or false (every array element check to bigger than or less than )

 numbers.every((item,index,array) =>{
  return item < 10;
})

// find -if true return value otherwise undifined

const res = numbers.find((item,index,array) =>{
  return item > 3;
})


// spread and Rest operator


const nums = [1,2,3];
const nums2 = [4,5,6];

const finalNums = [...nums, ...nums2] // spread operator
// console.log(finalNums);

// rest operator
function finalSum(...anyname){
  return anyname ;
}

// console.log(finalSum(nums, nums2,5,'hello'))

// More Array method 

// concat - use for adding
 nums.concat(nums2,arr);

// Slice - use for catting

arr.slice(0,2) // 0-start 2-end- 2-1 = 1

// splice

 arr.splice(1,2, 'lebu');

 // fill - remove element & replace value , start -replace value, 2nd value - kto index pore replace hbe
 const dummy = [2,3,4,6]
 dummy.fill(2,2);

 // findIndex

 const index =nums.findIndex((item)=>{
  item ===2;
 });

 //Flat - malti array k convert into one array

 const flaxEx = [0,1,[2,3],[[4,5],6]];

 const flattendedArray = flaxEx.flat(2); // [0,1,2,3,4,5,6]
 
 // reverse -
// console.log(nums)
nums.reverse();

// sort

const unsorted = [2,3,4,6,15,6,67];
unsorted.sort((a,b)=> a-b) // accending order
unsorted.sort((a,b)=> b-a) // decending order




























