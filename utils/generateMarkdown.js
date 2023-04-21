
//this creates a badge when the user enters a license type
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/license-MIT-ff69b4) ';
  } else if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/license-Apache-brightgreen) '

  } else if (license === 'BSD') {
    return '![License: Apache](https://img.shields.io/badge/license-BSD-blue) '
  } else {
    return '';
  }
}
//This is the link to the license depending on which license the user selects
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache') {
    return '(https://opensource.org/license/apache-2-0/)'
  } else if (license === 'BSD') {
    return '(https://opensource.org/license/bsd-1-clause/)'
  } else {
    return '';
  }
}

//this is where the license link is set up to be used by the readme template
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
  } else {
    return '';
  }
}
//this is the markdown template for the readme
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
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  A link to the webpage is provided here: [Webpage](${data.web})

  ![Screenshot](${data.screen})

  ## Contributing

  ${data.contributors}

  ## Tests

  ${data.instructions}

  ## License

  ${renderLicenseSection(data.license)}

  ## Questions

  If you have anyquestions don't hesitate to contact us with the information listed below.

  You can find our GitHub here: [GitHub](${data.git})

  You can email us here: ${data.email}
  `;
}

module.exports = generateMarkdown;
