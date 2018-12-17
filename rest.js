var addNumbers = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var p;
    var sum = 0;
    for (p = 0; p < nums.length; p++) {
        sum = sum + nums[p];
    }
    console.log(sum);
};
//The Result
addNumbers(1, 2);
addNumbers(1, 2, 3);
addNumbers(1, 12, 10, 18, 17);
