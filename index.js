const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the of your project ?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describe the installation process of your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How should your project be used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please choose a license.',
        name: 'license',
        options: []
    },
// I need to include contributing, tests and questions but I also need to look into this.
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
