// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// The input array that node will use in the terminal
const questions = [
  {
    type: 'input',
    message: 'What is your projects title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a short description explaining the what, why, and how of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project? If any.',
    name: 'installation',
  },
  
  {
  type: 'input',
  message: 'Provide the Webpage URL.',
  name: 'web',
},
{
type: 'input',
message: 'Please provide the file folder insturctions here for your screenshot.',
name: 'screen',
},
  {
    type: 'input',
    message: 'Who are the contributors on this project?',
    name: 'contributors',
  },
  {
    type: 'input', //open ended input by user
    message: 'Any instructions for users?',
    name: 'instructions',
  },
  {
    type: 'list', //provides options to users
    message: 'Which license are you using?',
    name: 'license',
    choices: ['MIT', 'Apache', 'BSD', 'none']
  },
  {
    type: 'input',
    message: 'Please add your Github URL.',
    name: 'git',
  },
  {
    type: 'input',
    message: 'Please provide your email adress',
    name: 'email',
  },
];

// This converts the answers (data) to a README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Data written to file');
    }
  });
}

// This starts the input and creats the readme file
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      writeToFile('README.md', data);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();