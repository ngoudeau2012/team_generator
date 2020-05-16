// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(name, employeeID, email, github){
        super(name, employeeID, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return this.constructor.name;
    };
}

module.exports = Engineer;