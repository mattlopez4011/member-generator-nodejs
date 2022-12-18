const inquirer = require('inquirer');
const fs = require('fs');
const TeamMember = require('./lib/classes');

const membersArray = [];

const internQuestions = [
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
        message: 'Please enter your school',
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
        message: 'Please enter your Github username',
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
            membersArray.push(response);
            console.log('\n')

            if (response.createMember === "Add Engineer") {
                memberInfo(engineerQuestions);
            } else if (response.createMember === "Add Intern") {
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