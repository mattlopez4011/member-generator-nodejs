//team manager’s name, employee ID, email address, and office number
//engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// intern’s name, ID, email, and school, and I am taken back to the menu

class Employee {
    constructor(nameInput, idInput, emailInput) {
        this.name = nameInput;
        this.employeeID = idInput;
        this.email = emailInput;
        this.role = 'Employee';
    }


    getName() {
        console.log(`Name: ${this.name}`);
    }

    getId() {
        console.log(`Id: ${this.employeeID}`);
    }

    getEmail() {
        console.log(`Email: ${this.email}`);
    }

    getRole() {
        console.log(`Role: ${this.role}`);
    }
}

module.exports = Employee;
