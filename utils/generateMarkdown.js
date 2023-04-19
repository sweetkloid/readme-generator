//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/license-MIT-ff69b4) ';
  }else if (license === 'Apache'){
    return '![License: Apache](https://img.shields.io/badge/license-Apache-brightgreen) '

  } else if (license === 'BSD'){
    return '![License: Apache](https://img.shields.io/badge/license-BSD-blue) '
  }else {
    return '';
  }
}
//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  }else if (license === 'Apache'){
    return '(https://opensource.org/license/apache-2-0/)' 
  } else if (license === 'BSD'){
    return '(https://opensource.org/license/bsd-1-clause/)'
  }else {
    return '';
  }
}


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
  } else {
    return '';
  }
}
// Create a function to generate markdown for README
// Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Instructions](#instructions)
* [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributors}

## Tests
${data.instructions}

## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
