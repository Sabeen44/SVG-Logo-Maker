const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "TEXT: Enter up to (3) Characters:",
      //validate:
    },
    {
      type: "input",
      name: "color",
      message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
      type: "input",
      name: "shape",
      message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
      type: "list",
      name: "pixel-image",
      message: "Choose which Pixel Image you would like?",
      choices: ["Circle", "Square", "Triangle"],
    },
  ])

  .then((answers) => {
    console.log(answers);

    fs.writeFile(
      `logo.svg`,
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <circle cx="150" cy="100" r="80" fill="green" /> 
       <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="PINK"/></svg>`,

      function (err) {
        if (err) {
          return console.log(error);
        }
        console.log("yayy");
      }
    );
  });

// const triangle = new Triangle();
// triangle.setColor("pink");
// str = triangle.render();
// console.log(str);
