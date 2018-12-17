let addNumbers = function(...nums: number[]) {
    let p;
    let sum: number = 0;
    for (p = 0; p < nums.length; p++) {
        sum = sum + nums[p];
    }
    console.log(sum);
}

//The Result
addNumbers(1, 2);
addNumbers(1, 2, 3);
addNumbers(1, 12, 10, 18, 17);
