var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.salary = function (salary) {
        if (salary === void 0) { salary = 10000; }
        console.log('Hello, ' + this.empName + ' Your Salary -' + salary);
    };
    return Employee;
}());
var emp = new Employee("Anil");
console.log(emp.salary());
console.log(emp.salary(40000));
//error: property 'empName' is private and only accesible in the class 'Employee'.
