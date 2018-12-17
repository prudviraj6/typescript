let sum = function() {
    let num = 20;
    return function subNum () {
        console.log(num + 10);
    }}
//RESULTS
sum(); // returns 30
