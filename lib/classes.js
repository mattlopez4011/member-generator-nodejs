//team manager’s name, employee ID, email address, and office number
//engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// intern’s name, ID, email, and school, and I am taken back to the menu

class TeamMember {
    constructor(name, ID, email, ) {
        this.name = name;
        this.employeeID = ID
        this.email = email;
    }


    console() {
        console.log(`${this.name} is functioning`);
    }
}

class TeamManager extends TeamMember {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;

        super(name, id, email);
    }
}

class TeamEngineer extends TeamMember {
    constructor(name, id, email, githubUsername) {      
        this.githubUsername = githubUsername;

        super(name, id, email);
    }
}



class TeamIntern extends TeamMember {
    constructor(name, id, email, school) {
        this.school = school;

        super(name, id, email);
    }
}

module.exports = TeamMember;