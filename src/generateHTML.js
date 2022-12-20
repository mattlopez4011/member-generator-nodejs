const fs = require('fs');

function generateHTML(managerArray, engineerArray, internArray) {

    let idCounter = 2
    managerHTML = managerToHTML(managerArray)
    engineerHTML = engineerToHTML(engineerArray, idCounter)
    console.log('after engineerHTML idCounter: ', idCounter)

    idCounter = engineerArray.length + 2
    console.log('idCounter = engineerArray.length + 2: ', idCounter = engineerArray.length + 2)

    internHTML = internToHTML(internArray, idCounter)
    console.log('after internHTML idCounter: ', idCounter)



    let finalHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style/style.css">
        <script src="https://kit.fontawesome.com/6c0f2d0160.js" crossorigin="anonymous"></script>
        <title>My Team</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
        <section id="managers-box">${managerHTML}</section>
        ${engineerHTML}
        ${internHTML}
        </main>
    </body>
    
    </html>
    `

    fs.writeFileSync('./dist/index.html', finalHTML, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    console.log('Done sending arrays to HTML✅')
}

function managerToHTML(managerArray) {
    console.log('managerArray: ', managerArray)


    if (managerArray.length > 0) {

        let name = managerArray[0].memberName;
        let id = '1';
        let role = 'Manager';
        let email = managerArray[0].memberEmail;
        let officeNum = managerArray[0].managerOfficeNumber;

        let html = `
    <div class="card">
                <div class="card-header">
                    <h2 id="manager-name">${name}</h2>
                    <h3 id="manager-title"><i class="fa fa-mug-hot"></i> ${role}</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li id="manager-id">ID: ${id}</li>
                        <li id="manager-email">Email: 
                        <a href="mailto:${email}">${email}</a>
                        </li>
                        <li id="manager-office-num">Office Number: ${officeNum}</li>
                    </ul>
                </div>
            </div>
    `

        return html
    }

    return ''
}

function engineerToHTML(engineerArray, idCounter) {
    if (engineerArray.length > 0) {
        let html = ''

        for (let index = 0; index < engineerArray.length; index++) {

            let name = engineerArray[index].memberName;
            let role = 'Engineer';
            let email = engineerArray[index].memberEmail;
            let github = engineerArray[index].memberGithubUsername;

            html += `
                <div class="card">
                <div class="card-header">
                    <h2 id="engineer-name">${name}</h2>
                    <h3 id="engineer-title"><i class="fa fa-glasses"></i>
                     ${role}</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li id="engineer-id">ID: ${idCounter}</li>
                        <li id="engineer-email">Email: 
                        <a href="mailto:${email}">${email}</a>
                        </li>
                        <li id="engineer-github">Github: 
                        <a href="https://github.com/${github}">${github}</a>
                        </li>
                    </ul>
                </div>
            </div>
    `
            idCounter++
        }

        return html;
    }

    return '';
}


function internToHTML(internArray, idCounter) {
    if (internArray.length > 0) {
        let html = ''

        for (let index = 0; index < internArray.length; index++) {

            let name = internArray[index].memberName;
            let role = 'Intern';
            let email = internArray[index].memberEmail;
            let school = internArray[index].memberSchool;

            html += `
                <div class="card">
                <div class="card-header">
                    <h2 id="intern-name">${name}</h2>
                    <h3 id="intern-title"><i class="fa fa-user-graduate"></i>
                     ${role}</h3>
                </div>
                <div class="card-body">
                    <ul>
                        <li id="intern-id">ID: ${idCounter}</li>
                        <li id="intern-email">Email: 
                        <a href="mailto:${email}">${email}</a>
                        </li>
                        <li id="intern-school">School: ${school}</li>
                    </ul>
                </div>
            </div>
    `
            idCounter++
        }

        return html;
    }

    return '';
}

module.exports = generateHTML;