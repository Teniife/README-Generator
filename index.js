// Required packages for this application
const fs =require('fs');
const inquirer = require('inquirer');
const path = require('path');
// Array of questions for user input
const questions = [
  {
    type:"input",
    name: "github" ,
    message: "Username on Github:",
    validate: nameInput => {
      if(nameInput){
        return true;
      } else {
        console.log("Your username is required!");
        return false;
      }
    }
  },
  {
    type: "input",
    name:"email",
    message:"Enter your email address" ,
    validate: nameInput => {
      if(nameInput){
        return true;
      } else {
        console.log("Email address is required!");
        return false;
      }
    }
  },
  {
    type:"input" ,
    name: "title",
    message: "What is your project repository name?",
    validate: nameInput => {
      if(nameInput){
        return true;
      } else {
        console.log("Your repository name is required!");
        return false;
      }
    }
  },
  {
    type:"input" ,
    name: "description",
    message: "Briefly describe your project:",
    validate: nameInput => {
      if(nameInput){
        return true;
      } else {
        console.log("A description of your project is required!");
        return false;
      }
    }
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license would you like on your project?",
    choices:["MIT","GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla", "Apache", "BSD 3", "Boost", "Unlicense", "None"],
    validate: nameInput => {
      if(nameInput){
        return true;
      } else {
        console.log("Choosing a license is required!");
        return false;
      }
    }
  },
  {
    type: "input" ,
    name: "installation",
    message: "Project installation instructions:",
    default: "npm i",
    validate: nameInput => {
      if(nameInput){
        return true;
      } else {
        console.log("Installation instructions are required!");
        return false;
      }
    }
  },
  {
    type:"input" ,
    name: "usage",
    message: "Usage instructions:",
    validate: nameInput => {
      if(nameInput){
        return true;
      } else {
        console.log("Usage instructions required!");
        return false;
      }
    }
  },
  {
    type:"input" ,
    name: "testing",
    message: "What commands should be used to run tests?",
    validate: nameInput => {
      if(nameInput){
        return true;
      } else {
        console.log("Testing instructions required!");
        return false;
      }
    }
  },
  {
    type: "input",
    name: "contributions",
    message: "Others can contribute by:",
    validate: nameInput => {
      if(nameInput){
        return true;
      } else {
        console.log("contribution instructions required!");
        return false;
      }
    }
  },
  {
    type: "input",
    name:"questions" ,
    message:"Others can reach you by:" ,
    validate: nameInput => {
      if(nameInput){
        return true;
      } else {
        return false;
      }
    }
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(__dirname, fileName), data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
