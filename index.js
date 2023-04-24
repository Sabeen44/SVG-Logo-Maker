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
      message:
        "TEXT COLOR: Enter a color keyword (OR a hexadecimal number) for text color:",
    },
    {
      type: "input",
      name: "fill",
      message:
        "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number)for shape color:",
    },
    {
      type: "list",
      name: "image",
      message: "Choose an image:",
      choices: ["Circle", "Square", "Triangle"],
    },
  ])

  .then((answers) => {
    console.log(answers);

    if (answers.image === "Circle") {
      shape = new Circle();
    } else if (answers.image === "Triangle") {
      shape = new Triangle();
    } else if (answers.image === "Square") {
      shape = new Square();
    }

    shape.setColor(answers.fill);
    Rendershape = shape.render();
    console.log(Rendershape);

    shapeString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${Rendershape}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.color}">
     ${answers.text}</text>
     </svg>`;

    fs.writeFile(`logo.svg`, shapeString, function (err) {
      if (err) {
        return console.log(error);
      }
      console.log("Generated logo.svg");
    });
  });
