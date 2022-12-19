//function to recieve arrays of information objects and sort them
const teamSorter = (managerArray, engineerArray, internArray) => {
    sortMembers(managerArray);
    sortMembers(engineerArray);
    sortMembers(internArray);

    

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
}


module.exports = teamSorter;