const inquirer = require("inquirer"); // we will require the inquirer package
const fs = require("fs"); // we will require the file system package.
const { Circle, Square, Triangle } = require("./lib/shapes");

inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "enter 3 characters",
            validate: (input) => {
                if (input.length < 2) { // if the input is less than 3 characters. 
                    return "please enter at least 3 characters"
                } else {
                    return true;
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
            message: "enter a color that you would like the shape to be"
        },
    ])

    .then((response) => { // we will take the response from the inquirer prompt as a promise.
        let shape;
        if (response.shape === "circle") {
            shape = new Circle(response.text, response.textColor, response.shapeColor); // if response.shape is strictly equal to circle, then we will create a new Circle object.
        } else if (response.shape === "square") {
            shape = new Square(response.text, response.textColor, response.shapeColor); // if response.shape is strictly equal to square, then we will create a new Square object.
        } else if (response.shape === "triangle") {
            shape = new Triangle(response.text, response.textColor, response.shapeColor); // if response.shape is strictly equal to triangle, then we will create a new Triangle object.
        }

        fs.writeFile("logo.svg", `${shape.render()}`, (err) => { // we will write to a file name logo.svg. we will make the file empty, and if there is an error, then we will console.log that error on the console.
            if (err) {
                console.log(err);
            }
        })
    })
