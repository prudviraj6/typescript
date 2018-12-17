class Employee {
    public empName: string;
    constructor(name: string) {
        this.empName = name;
    }

    salary(salary: number = 10000) {
        console.log('Hello, ' + this.empName + ' Your Salary -' + salary);
    }
}

let emp = new Employee("Anil"); 
console.log(emp.salary());
console.log(emp.salary(40000));

//error: property 'empName' is private and only accesible in the class 'Employee'.
