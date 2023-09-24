// Ques- Find the largest three elements in the array
// input: [100,23,56,10,34] ---------- output: [100,56,34]



function threeLargest(arr) {

    if(arr.length <3){
        return 'invalid input';
        
    }

    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;
    let third = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > first) {
            third = second;
            second = first;
            first = arr[i];
        }
        else if (arr[i] > second) {
            third = second;
            second = arr[i];
        }
        else if (arr[i] > third) {
            third = arr[i];
        }
    }

    return [first, second, third];
}

console.log(threeLargest([20, 12,30,45,66,1,5,100]))