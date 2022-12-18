//team manager’s name, employee ID, email address, and office number
//engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// intern’s name, ID, email, and school, and I am taken back to the menu

class TeamMember {
    constructor(name, ID, email, ) {
        this.name = name;
        this.employeeID = ID
        this.email = email;
    }

    
    checkOperations() {
        console.log(`${this.name} is functioning`);
    }
}


module.exports = TeamMember;