//FUNCTION USING USER INTERFACE 
var userInfo = function (user) {
    var info = "Hello, " + user.name + " Your Age is - " + user.age + " and Address is -" + user.address;
    console.log(info);
};
//USER INFO JSON OBJECT
var info = {
    name: "Jhonny",
    age: 30,
    address: "Hyderabad, India."
};
//RESULT
console.log(userInfo(info));
