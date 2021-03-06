// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, employeeID, email, officeNumber){
        super(name, employeeID, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return this.constructor.name;
    };
};

module.exports = Manager;