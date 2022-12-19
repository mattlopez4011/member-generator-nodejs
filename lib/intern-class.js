const Employee = require('./employee-class');


class Intern extends Employee {
    constructor(nameInput, idInput, emailInput, schoolInput) {
        super(nameInput, idInput, emailInput);

        this.school = schoolInput;
        this.role = 'Intern';
    }

    getSchool() {
        console.log(`School: ${this.school}`);
    }
}

module.exports = Intern;