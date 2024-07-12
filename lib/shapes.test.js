const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    test('should return true if shape has the coordinates of a circle, color, and text', () => {
        const shape = new Circle();
        shape.shapeColor = "blue";
        shape.textColor = "white";
        shape.text = "ktg";
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ktg</text>
</svg>`);

    });
})

describe('Sqaure', () => {
    test('should return true if the shape has the coordinates of a square, color, and text', () => {
        const shape = new Square();
        shape.shapeColor = "blue";
        shape.textColor = "white";
        shape.text = "ktg";
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" x="10" y="10" rx="20" ry="20" fill="blue" />
        <text x="60" y="75" font-size="60" text-anchor="middle" fill="white">ktg</text>
</svg>`);
    });
})

describe('Triangle', () => {
    test('should return true if shape has the same color,svg, and coordinates of a triangle', () => {
        const shape = new Triangle();
        shape.shapeColor = "blue";
        shape.textColor = "white";
        shape.text = "ktg";
        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" /> 
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="white">ktg</text>
</svg>`);
    });
})

