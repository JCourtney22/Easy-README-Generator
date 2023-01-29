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
        name: "tabel of contents",
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
        type: 'checkbox',
        message: 'Please choose a license.',
        options: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
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
        message: "How should people contact you if they have questions?",
        name: "questions",
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
