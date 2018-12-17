interface User {
    name: string;
    age: number;
    address: string
}

//FUNCTION USING USER INTERFACE 
let userInfo = function(user: User) {
   let info = "Hello, " + user.name + " Your Age is - " + user.age + " and Address is -" + user.address;

   return info;
}

//USER INFO JSON OBJECT
let info = {
    name: "Jhonny",
    age: 30,
    address: "Hyderabad, India."
};

//RESULT
console.log(userInfo(info));
