// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your title?',
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What licenses would you like to add?',
        choices: ['MIT','BSD 3','APACHE 2.0','None'],
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project:',
    },
    {
        type: 'input',
        name: 'installations',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contributionGuide',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err): console.log('READ ME CREATED!')
     );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((input) => {
        writeToFile('README.md', input);
    })
}

// Function call to initialize app
init();
