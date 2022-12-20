const generateHTML = require('./generateHTML');

//function to receive arrays of information objects and sort them
const teamSorter = (managerArray, engineerArray, internArray) => {
    console.log('engineerArray: ', engineerArray)
    sortMembers(managerArray);
    sortMembers(engineerArray);
    sortMembers(internArray);


    console.log('after engineerArray: ', engineerArray)
    console.log('after internArray: ', internArray)
    generateHTML(managerArray, engineerArray, internArray);
}


const sortMembers = array => {
    array.sort((a, b) => {
        let nameA = a.memberName.toLowerCase();
        let nameB = b.memberName.toLowerCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    return array
}


module.exports = teamSorter;