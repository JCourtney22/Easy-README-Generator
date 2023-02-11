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
        message: 'Please choose a license (use arrow keys and enter to select).',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'Boost 1.0', 'BSD2', 'BSD3', 'none'],
    },
    {
        type: 'input',
        message: 'How do you want others to contribute to the project?.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What tests are required?',
        name: 'tests',
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
        writeToFile("./GeneratedREADME.md", generateMarkdown({ ...responses }));

    });
}

// function call to initialize program
init();

