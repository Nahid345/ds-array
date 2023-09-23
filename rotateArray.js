// ques- Rotate Array by 
// Given an interger array nums, rorate the array to the right by k steps
// Where k is non-negative

// Input: nums =[1,2,3,4,5,6,7], k=3---------- Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k=2 ------- output: [3,99, -1,-100]


// [1,2,3,4,5,6,7] => 


function rotateArray(nums, k) {
    let size = nums.length;
    if (size > k) {
        k = k % size;
    }
    const rotated = nums.splice(size - k, size);   // O(n)
    nums.unshift(...rotated);

    return nums;
}

console.log(rotateArray([1,2,3,4,5,6,7],3));

// Time complexity: O(n)


//