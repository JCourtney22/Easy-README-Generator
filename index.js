const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description',
    },
    {
        type: "input",
        message: "Table of Contents",
        name: "tab of contents",
    },
    {
        type: 'input',
        message: 'Please describe the installation process or requirements of your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How should your project be used?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose a license.',
        options: ["MIT", "APACHE 2.0", "Boost 1.0", "BSD2", "BSD3", "none"],
        name: 'license',
    },
    {
        type: "input",
        message: " Please list any contributors.",
        name: "contributors",
    },
    {
        type: "input",
        message: "What tests are required?",
        name: "tests",
    },
    {
        type: "input",
        message: "Contact information for inquiries",
        name: "questions",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your contact email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
    console.log("Creating README...");
    writeToFile("./README.md", generateMarkdown({...responses}));
});
}

// function call to initialize program
init();

//Switch statement to select the badge

// const printLicense = (licence) => {
//     switch(licence) {
//         case ("MIT")
//     }
// }

const printLicense = (licence) => ({
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "APACHE 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost 1.0": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD 2": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "BSD 3": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "none": "none"
})
