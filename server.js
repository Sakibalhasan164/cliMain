let bio = {};
const express = require("express");
const app = express();

const chalk = require("chalk");
const inquirer = require("inquirer");
const warning = chalk.keyword("red");
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Your name :",
    },
  ])
  .then((answers) => {
    bio["name"] = answers.name;
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "TorF",
          message: `your name is ${answers.name}?`,
        },
      ])
      .then((ans) => {
        bio["ensure"] = ans.TorF;
        inquirer
          .prompt([
            {
              type: "input",
              name: "age",
              message: "What's your age",
            },
          ])
          .then((answer) => {
            bio["age"] = answer.age;
            console.log(bio);
            app.listen(3000, console.log("server is listing on port 3000"));
          });
      });
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("not possible");
    } else {
      // Something else went wrong
      console.log("something went wrong");
    }
  });

app.get("/", (req, res) => {
  if (bio) {
    res.json(bio);
  }
});
