const inquirer = require('inquirer');
const fs = require('fs');
const html = ({name, stack, username, contact, repo,}) =>

`# Build CLI App Inquirer
${name};
## Description
Work with a partner to implement the following user story:
* My name is ${name}. As a developer, I want to create a command-line application that takes in input from the user and creates a README.

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README


// IF you go to your terminal/bash window
// THEN you go type in <node index.js>
// WHEN you type in <node index.js>
// THEN you will be met with a series of prompts
// WHEN you fill out the prompts
// THEN you will see “Success!” and will have generated a README file

## Table of Contents
[Author](#author)
[Technologies](#technologies)
[Links](#links)

## Instalation - npm install
## Usage - What command needs to be used? How do I use this, what for?
## License - Mit (link to MIT for information), n/a, examples
## Contributing - How can people contribute (freetext)
## Tests - Instructions What command do you run to test project (freetext)
## Questions
If you have questions, send me an email at ${contact}

// ## Technologies
// ${stack}
// ## Links
// ${repo}
`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is your name?"
    },
    {
      type: 'checkbox',
      message: "What languages do you know?",
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'node.js', 'MySQL'],
    },
    {
      type: 'list',
      message: "What is your preferred method of communication?",
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
    {
      type: 'input',
      message: "What is your GitHub username? (No @ needed)",
      name: 'username',
    },
    {
      type: 'input',
      message: "What is the name of your GitHub repo?",
      name: 'repo',
},
  ])
  .then((answers) => {
   const htmlPageContent = html(answers);
    const filename = "README.md";
    fs.writeFile(filename,htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Success!'),
    )});

