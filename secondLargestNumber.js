// Ques- Find secondLargest Number
// Gives an array of size of N, print second largest number
// distinct  element fom array

// input : [12,35,34,1]    output: 34
// input: [10,5,10,3]       output: 5


// function secondLargest(arr){

//     const uniqueArr = Array.from(new Set(arr)); // O(n)
//     uniqueArr.sort((a,b)=>{                     // O(nlogn)
//         return b-a;
//     })

//     if(uniqueArr.length >=2){
//         return uniqueArr[1];
//     }

//     else{
//         return -1;
//     }
// }
  //console.log(secondLargest([10,5,0,10]))

  // Time Complexity : O(nlogn)


  // optimised Approach (row code):


  function secondLargestOptimised(arr){

    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

 for(let i = 0; i<arr.length; i++){   //{arr.length} -> O(n)
    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];
      
    }
    else if(arr[i] != largest && arr[i]> secondLargest){
        secondLargest = arr[i];
    }
 }

 return secondLargest;

  }
  
  console.log(secondLargestOptimised( [12,35,34,1] ))

  // time complexity: O(n)
  // space complexity: O(1)