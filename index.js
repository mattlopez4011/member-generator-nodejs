const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager-class');
const Engineer = require('./lib/engineer-class');
const Intern = require('./lib/intern-class');


const membersArray = [];

const internQuestions = [
    {
        type: 'input',
        message: "Please enter the intern's name",
        name: 'memberName',
    },
    {
        type: 'input',
        message: "Please enter the intern's email adress",
        name: 'memberEmail',
    },
    {
        type: 'input',
        message: "Please enter the intern's school",
        name: 'memberSchool',
    },
    {
        type: 'list',
        message: 'Would you like to add another team meaber?',
        name: 'createMember',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter the engineer's name",
        name: 'memberName',
    },
    {
        type: 'input',
        message: "Please enter the engineer's email adress",
        name: 'memberEmail',
    },
    {
        type: 'input',
        message: "Please enter the engineer's Github username",
        name: 'memberGithubUsername',
    },
    {
        type: 'list',
        message: 'Would you like to add another team meaber?',
        name: 'createMember',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
    },
]

const managerQuestions = [
    {
        type: 'input',
        message: 'Please enter your name',
        name: 'memberName',
    },
    {
        type: 'input',
        message: 'Please enter your email adress',
        name: 'memberEmail',
    },
    {
        type: 'input',
        message: 'Please enter your office number',
        name: 'managerOfficeNumber',
    },
    {
        type: 'list',
        message: 'Would you like to add another team meaber?',
        name: 'createMember',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team'],
    },
]

//team manager’s name, employee ID, email address, and office number


const memberInfo = questions => {
    inquirer
        .prompt(
            questions
        )
        .then(response => {
            console.log('\n')

            if (response.managerOfficeNumber) {
                //Takes the entered names and uppercases the first letters.
                const nameLower = response.memberName.toLowerCase();
                const nameArray = nameLower.split(' ');
                console.log(nameArray)
                let correctName = '';
                for (index = 0; index < nameArray.length; index++) {
                    let properName = nameArray[index].charAt(0).toUpperCase() + nameArray[index].slice(1);
                    correctName = correctName.concat(`${properName} `);
                    console.log(properName + ' middle log');
                };

                console.log(correctName + 'last log');

                const manager = new Manager(correctName, 1, response.memberEmail, response.managerOfficeNumber);

                console.log(manager);
            }

            if (response.createMember === "Add Engineer") {
                membersArray.push(response);
                memberInfo(engineerQuestions);
            } else if (response.createMember === "Add Intern") {
                membersArray.push(response);
                memberInfo(internQuestions);
            } else if (response.createMember === "Finish building team") {
                console.log(`Team is Finished!`)
            }
        })
}


const init = () => {
    memberInfo(managerQuestions);
}

init();