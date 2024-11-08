

// function countWordOccurrences(fullsentence) {
//     const sentenceChack = fullsentence.toLowerCase().match(/\b\w+\b/g);

//     const countWord = sentenceChack.reduce((count,word) =>{
//         count[word] = (count[word] || 0) + 1;
// return count;
//     },{});

//     const mostWord = Object.keys(countWord).reduce((x,y) =>
//     countWord[x] > countWord[y] ? x:y
//     );

//     return { MostWord:mostWord , count:countWord[mostWord] }
// }

// const fullsentence = "I love typescript typescript";

// console.log(countWordOccurrences(fullsentence))


// Define Circle and Rectangle objects with a shape property
const Circle = (radius) => ({ shape: "circle", radius });
const Rectangle = (width, height) => ({ shape: "rectangle", width, height });

function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        // Calculate area for a circle (π * radius^2)
        return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle") {
        // Calculate area for a rectangle (width * height)
        return shape.width * shape.height;
    } else {
        throw new Error("Unknown shape type");
    }
}

// Example usage:
const myCircle = Circle(5);
const myRectangle = Rectangle(4, 6);

console.log("Area of Circle:", calculateShapeArea(myCircle)); // Should print the area of the circle
console.log("Area of Rectangle:", calculateShapeArea(myRectangle)); // Should print the area of the rectangle
