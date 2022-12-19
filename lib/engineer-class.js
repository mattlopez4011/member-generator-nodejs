const Employee = require('./employee-class');

class Engineer extends Employee {
    constructor(nameInput, idInput, emailInput, githubUsernameInput) {
        super(nameInput, idInput, emailInput);

        this.githubUsername = githubUsernameInput;
        this.role = 'Engineer';
    }

    getGithub() {
        console.log(`Github: ${this.githubUsername}`);
    }
}


module.exports = Engineer;