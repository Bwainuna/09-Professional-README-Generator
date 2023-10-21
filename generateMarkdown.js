module.exports = generateMarkdown;

// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ![License Badge](https://img.shields.io/badge/license-${data.license}-green)
  This application is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Have any questions for me? Feel free to reach me on GitHub:
  [Github Profile](https://github.com/${data.github})
  
  For any additional questions you might have, feel free to contact me via email:
  Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;