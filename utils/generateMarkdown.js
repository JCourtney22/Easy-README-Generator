// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
# Description 
${data.description}
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation
${data.installation}
# Usage
${data.usage}
# License
This project is licensed with ${data.license}: 
# Contributing
${data.contributing}
# Tests
${data.tests}
# Questions
Please contact me via the following: ${data.questions}
`;
}

module.exports = generateMarkdown;
