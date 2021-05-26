const square = require('./input.js');

const calSquare_perimeter = (a) => {
    console.log(`The side of the square is ${a} and the perimeter is:` +square.perimeter(a));
}

const calSquare_area = (a) => {
    console.log(`The side of the square is ${a} and the area is:` +square.area(a));
}

calSquare_perimeter(5);
calSquare_area(4);

console.log(__filename);
console.log(__dirname);