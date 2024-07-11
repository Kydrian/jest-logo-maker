const inquirer = require("inquirer"); // we will require the inquirer package
const fs = require("fs"); // we will require the file system package.
const {Circle, Square, Triangle} = require("./lib/shapes");
const { validate } = require("@babel/types");

inquirer
.prompt([
    {
        type: "input",
        name: "text",
        message: "enter 3 characters"
        validate: (input) => {
            if (input.length < 3) {
                return "please enter at least 3 characters"
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "what color should the text be?"
    
    },
    {
        type: "list",
        name: "shape",
        message: "choose a shape",
        choices: ["circle", "square", "triangle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "enter a color that you would like the shape be?"
    },
])

.then ((response) => {
    let shape;
    if (response.shape === "circle") {
        shape = new Circle(response.text, response.textColor, response.shapeColor);
    } else if (response.shape === "square") {
        shape = new Square(response.text,response.textColor, response.shapeColor);
    } else if (response.shape === "triangle") {
        shape = new Triangle(response.text, response.textColor, response.shapeColor);
    }



fs.writeFile("logo.svg", `${shape.render()}`, (err) => { // we will write to a file name logo.svg. we will make the file empty, and if there is an error, then we will console.log that error on the console.
    if (err) {
        console.log(err);
    }
})
})
