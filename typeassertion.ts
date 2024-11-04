// 1. Basic Type Assertion


let someValue: unknown = "Hello, TypeScript!";
// Using `as` syntax
let strLength: number = (someValue as string).length;

// Using angle-bracket syntax
let strLength2: number = (<string>someValue).length;

// 2. Non-Null Assertion (!)

// let element = document.getElementById("myElement");
// // TypeScript might think `element` could be `null`, but if you're sure it exists:
// element!.style.color = "blue";

