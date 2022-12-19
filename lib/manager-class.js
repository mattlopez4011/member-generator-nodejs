const Employee = require('./employee-class');

class Manager extends Employee {
    constructor(nameInput, idInput, emailInput, officeNumberInput) {
        super(nameInput, idInput, emailInput);

        this.officeNumber = officeNumberInput;
        this.role = 'Manager';
    }
}


module.exports = Manager;