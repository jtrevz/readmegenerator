// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![badge](https://img.shields.io/badge/license-${data.license}-yellow.svg)
  ${data.description}
  <br>
  ## Table of Contents:
  * [Installation](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contributing](#contributing)
  * [Questions](#questions)
<br>

### Install
Need to install for application to run:
${data.installations}
<br>

### Usage
${data.usageInfo}
<br>

### License
[Licences](https://opensource.org/licenses/${data.license})
<br>

### Tests 
${data.test}
<br>

### Contributions
${data.contributionGuide}
<br>

### Questions
Any questions for me? Message me on [GitHub](https://github.com/${data.questions}) or by email @ ${data.email}
`;
}

module.exports = {generateMarkdown};
