// Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Create an array of questions for user input
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
    type: 'input',
    message: 'Any instructions for users?',
    name: 'instructions',
  },
  {
    type: 'list',
    message: 'Which license are you using?',
    name: 'license',
    choices: ['MIT', 'Apache', 'BSD']
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

// Create a function to write README file
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

// Create a function to initialize app
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