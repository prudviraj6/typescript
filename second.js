var sum = function () {
    var num = 20;
    return function subNum() {
        console.log(num + 10);
    };
};
//RESULTS
sum(); // returns 30
