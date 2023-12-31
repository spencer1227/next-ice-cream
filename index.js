const inquirer = require('inquirer');
const fs = require('fs');
const html = ({title, author, description, install, usage, license, contribute, test}) =>

`# Build CLI App Inquirer
# ${title}

${licenseBadge(license)}

## Criteria
Work with a partner to implement the following user story:
* My name is ${author}. As a developer, I want to create a command-line application that takes in input from the user and creates a README.

# Acceptance Criteria
GIVEN a command-line application that accepts user input
<br>
WHEN I am prompted for information about my application repository
<br>
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
<br>
WHEN I enter my project title
<br>
THEN this is displayed as the title of the README
<br>
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
<br>
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
<br>
WHEN I choose a license for my application from a list of options
<br>
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
<br>
WHEN I enter my GitHub username
<br>
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
<br>
WHEN I enter my email address
<br>
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
<br>
WHEN I click on the links in the Table of Contents
<br>
THEN I am taken to the corresponding section of the README


## Table of Contents
[Title](#title)
<br>
[Author](#author)
<br>
[Description](#description)
<br>
[Installation](#installation)
<br>
[Usage](#usage)
<br>
[License](#license)
<br>
[Contributing Guidlines](#contributing_guidelines)
<br>
[Test Instructions](#test_instructions)
<br>
[Questions](#questions)

# Mock Up

## Description
${description}

## Installation 
${install}

## Usage
${usage}

## License
${license}

License Link: ${licenseLink(license)}

## Contributing Guidelines 
${contribute}

## Test Instructions
${test}

## Video
Video: <iframe src="https://drive.google.com/file/d/1B99n8_49PqIsgE22kYU-T15qO0Hb9W39/preview" width="640" height="480"></iframe>

## Questions
If you have questions, send me an email at [hoile1227@gmail.com](#hoile1227@gmail.com)

`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is your project title?"
    },
    {
      type: 'input',
      name: 'author',
      message: "What is your name?"
    },
    {
      type: 'input',
      name: 'description',
      message: "How would you describe this project?"
    },
    {
      type: 'input',
      name: 'install',
      message: "What installations did you make for this project"
    },
    {
      type: 'input',
      name: 'usage',
      message: "What command needs to be used? How do I use this?"
    },
    {
      type: 'list',
      message: "What license (if any) will you be using",
      name: 'license',
      choices: ['Mit License', 'Apache License 2.0', 'None'],
    },
    {
      type: 'input',
      name: 'contribute',
      message: "What were the contribution guidelines?"
    },
    {
      type: 'input',
      name: 'test',
      message: "What are the test instructions?"
    }

  ])
  .then((answers) => {
   const htmlPageContent = html(answers);
    const filename = "README.md";
    fs.writeFile(filename,htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Success!'),
    )});

function licenseLink(license) {
  if(license==="Mit License") {
    return `https://opensource.org/licenses/MIT`
  }
  else if(license==="Apache License 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  }

}

function licenseBadge(license) {
  if(license==="Mit License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license==="Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }

}